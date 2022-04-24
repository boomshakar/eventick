import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal as BuyTicket, Input, InputNumber, Space, Form } from "antd";
import { mockedDataArr } from "../utils/Mockeddata";
import Cookie from "js-cookie";
import QRCode from "react-qr-code";
import ReactToPrint from "react-to-print";
import {
	EventContain,
	EventContainBg,
	EventImg,
	EventMainContent,
	EventTopInfo,
	EventTopInfo01,
	EventTopInfo02,
	EventTopInfo03,
	EventTopSection,
	PageContain,
} from "./EventDetails.styled";
import PreviewPrintTicket from "../components/PreviewPrintTicket";

const EventDetails = () => {
	const { eventId } = useParams();
	const [eventDetail, setEventDetail] = useState([]);
	const [buyTicketModal, setBuyTicketModal] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState("Content of the modal");
	const [buyerName, setBuyerName] = useState("");
	const [buyerEmail, setBuyerEmail] = useState("");
	const [buyerCardNo, setBuyerCardNo] = useState("");
	const [buyerCardMMYY, setBuyerCardMMYY] = useState("");
	const [buyerCardCCV, setBuyerCardCCV] = useState("");
	const [showPreviewTicket, setShowPreviewTicket] = useState(false);
	const [previewState, setPreviewState] = useState(false);

	let testRef = useRef();
	let checkTicketStatus = Cookie.get(`event${eventDetail[0]?.id}`);
	console.log({ checkTicketStatus });
	checkTicketStatus = checkTicketStatus !== undefined && JSON.parse(checkTicketStatus);
	// console.log({ checkTicketStatus: JSON.parse(checkTicketStatus) });
	const ticketBought = checkTicketStatus?.id === eventId;

	useEffect(() => {
		const result = mockedDataArr.filter((data) => data.id === eventId);
		setEventDetail(result);
	}, []);

	const handleToBuyTicket = () => {
		setBuyTicketModal(true);
	};
	const handleOk = () => {
		if (buyerName === "" || buyerEmail === "" || buyerCardNo === "" || buyerCardMMYY === "" || buyerCardCCV === "")
			return false;
		setModalText("The modal will be closed after two seconds");
		setConfirmLoading(true);
		Cookie.set(
			`event${eventDetail[0]?.id}`,
			JSON.stringify({ id: `${eventDetail[0]?.id}`, buyer_name: buyerName, buyer_email: buyerEmail })
		);
		setTimeout(() => {
			setPreviewState(true);
			setBuyTicketModal(false);
			setConfirmLoading(false);
			setModalText("Content of the modal");
			setBuyerName("");
			setBuyerEmail("");
			setBuyerCardNo("");
			setBuyerCardMMYY("");
			setBuyerCardCCV("");
		}, 2000);
	};
	const handleCancel = () => {
		console.log("Clicked cancel button");
		setBuyTicketModal(false);
	};
	const handleToPreviewTicket = () => {
		setPreviewState(true);
	};

	return (
		<>
			<PageContain>
				{eventDetail?.map(({ id, event_title, event_date, event_banner, location, powered_by, verified }) => {
					return (
						<EventContain key={id}>
							<EventContainBg bgImg={event_banner} />
							<EventMainContent>
								<EventTopSection>
									<EventImg src={event_banner} alt={event_title} />
									<EventTopInfo>
										<EventTopInfo01>
											<h5>{event_title}</h5>
											<p>by : {powered_by} </p>
										</EventTopInfo01>
										<EventTopInfo02 ref={(el) => (testRef = el)}>
											<div>Hello</div>
											<div>Hello</div>
										</EventTopInfo02>
										{ticketBought ? (
											<>
												{/* <EventTopInfo03 disabled>Ticket Bought</EventTopInfo03> */}
												<EventTopInfo03 prev onClick={handleToPreviewTicket}>
													Preview Ticket
												</EventTopInfo03>
											</>
										) : (
											<EventTopInfo03 onClick={handleToBuyTicket}>Buy Ticket</EventTopInfo03>
										)}
									</EventTopInfo>
								</EventTopSection>

								<QRCode value="heyss" title="My Name" />
								<ReactToPrint
									trigger={() => <EventTopInfo03>Prin this copy test</EventTopInfo03>}
									content={() => testRef}
								/>
							</EventMainContent>
						</EventContain>
					);
				})}
			</PageContain>

			<BuyTicket
				title="Fill in the required information"
				visible={buyTicketModal}
				onOk={handleOk}
				okText="Pay"
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
			>
				<div style={{ width: "100%", height: "100%" }}>
					<Form layout="vertical">
						<Form.Item label="Name" required tooltip="This is a required field">
							<Input type="text" placeholder="input your Full Name" onChange={(e) => setBuyerName(e.target.value)} />
						</Form.Item>
						<Form.Item label="Email" required tooltip="This is a required field">
							<Input type="email" placeholder="input your Email" onChange={(e) => setBuyerEmail(e.target.value)} />
						</Form.Item>
						<Form.Item
							label="Card Information"
							tooltip="Don't worry, just input some random numbers 😎"
							style={{ marginBottom: 0 }}
						>
							<Form.Item name="cardNumber">
								<Input
									type="number"
									placeholder="XXXX-XXXX-XXXX-XXXX"
									onChange={(e) => setBuyerCardNo(e.target.value)}
								/>
							</Form.Item>
							<Form.Item name="mmyy" style={{ display: "inline-block", width: "calc(50% - 8px)" }}>
								<Input type="number" placeholder="MM/YY" onChange={(e) => setBuyerCardMMYY(e.target.value)} />
							</Form.Item>
							<Form.Item name="ccv" style={{ display: "inline-block", width: "calc(50% - 1px)", margin: "0 0 0 8px" }}>
								<Input type="number" placeholder="CCV" onChange={(e) => setBuyerCardCCV(e.target.value)} />
							</Form.Item>
						</Form.Item>
					</Form>
				</div>
			</BuyTicket>
			{previewState && (
				<PreviewPrintTicket
					eventId={eventDetail[0]?.id}
					handlePreviewState={() => setPreviewState(false)}
					previewState={previewState}
				/>
			)}
		</>
	);
};

export default EventDetails;
