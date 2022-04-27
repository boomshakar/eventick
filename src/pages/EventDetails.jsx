import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal as BuyTicket, Input, Space, Form, Select, DatePicker } from "antd";
import { mockedDataArr } from "../utils/Mockeddata";
import Cookie from "js-cookie";
import {
	EventBottomL,
	EventBottomR,
	EventBottomRFeatures,
	EventBottomRLocation,
	EventBottomRPolicy,
	EventBottomSection,
	EventContain,
	EventContainBg,
	EventImg,
	EventMainContent,
	EventPriceTagContain,
	EventTopInfo,
	EventTopInfo01,
	EventTopInfo02,
	EventTopInfo02Mobile,
	EventTopInfo03,
	EventTopInfoMobile,
	EventTopSection,
	PageContain,
} from "../styled/EventDetails.styled";
import PreviewPrintTicket from "../components/PreviewPrintTicket";
import { fieldChecker, thousandFormatter } from "../utils/helper";
import { showToastMessage } from "../utils/Toast";

const EventDetails = () => {
	const { eventId } = useParams();
	const [eventDetail, setEventDetail] = useState([]);
	const [buyTicketModal, setBuyTicketModal] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState("Content of the modal");
	const [buyerName, setBuyerName] = useState({ id: "Full Name", value: "" });
	const [buyerEmail, setBuyerEmail] = useState({ id: "Email", value: "" });
	const [buyerGender, setBuyerGender] = useState({ id: "Gender", value: "" });
	const [buyerBirthDate, setBuyerBirthDate] = useState({ id: "Birthdate", value: "" });
	const [buyerPhoneNumber, setBuyerPhoneNumber] = useState({ id: "Phone Number", value: "" });
	const [previewState, setPreviewState] = useState(false);

	let checkTicketStatus = Cookie.get(`event${eventDetail[0]?.id}`);
	checkTicketStatus = checkTicketStatus !== undefined && JSON.parse(checkTicketStatus);
	const ticketBought = checkTicketStatus?.id === eventId;

	useEffect(() => {
		const result = mockedDataArr.filter((data) => data.id === eventId);
		setEventDetail(result);
	}, []);

	const handleToBuyTicket = () => {
		setBuyTicketModal(true);
	};
	const handleOk = () => {
		const fieldsToCheck = [buyerName, buyerEmail, buyerGender, buyerBirthDate, buyerPhoneNumber];
		if (
			buyerName.value === "" ||
			buyerEmail.value === "" ||
			buyerGender.value === "" ||
			buyerBirthDate.value === "" ||
			buyerPhoneNumber.value === ""
		) {
			for (let i = 0; i < fieldsToCheck.length; i++) {
				fieldChecker(fieldsToCheck[i]);
			}

			return;
		}
		setModalText("The modal will be closed after two seconds");
		setConfirmLoading(true);
		const Test = () => (
			<>
				{" "}
				<span>Congratulations, your seat has been reserved.</span>
				<div>
					<i>Make sure you save/print your ticket as it would be check at entry point of the venue.</i>
				</div>
			</>
		);
		setTimeout(() => {
			showToastMessage({
				type: "success",
				title: "Seat Reserved!",
				description: <Test />,
			});
			Cookie.set(
				`event${eventDetail[0]?.id}`,
				JSON.stringify({
					id: `${eventDetail[0]?.id}`,
					buyer_name: buyerName.value,
					buyer_email: buyerEmail.value,
					buyer_gender: buyerGender.value,
				})
			);
			setPreviewState(true);
			setBuyTicketModal(false);
			setConfirmLoading(false);
			setModalText("Content of the modal");
			setBuyerName({ id: "Full Name", value: "" });
			setBuyerEmail({ id: "Email", value: "" });
			setBuyerGender({ id: "Gender", value: "" });
			setBuyerBirthDate({ id: "Birthdate", value: "" });
			setBuyerPhoneNumber({ id: "Phone Number", value: "" });
		}, 2000);
	};
	const handleCancel = () => {
		setBuyTicketModal(false);
	};
	const handleToPreviewTicket = () => {
		setPreviewState(true);
	};

	return (
		<>
			<PageContain>
				{eventDetail?.map(
					({
						id,
						event_title,
						event_date,
						event_subtitle,
						event_details,
						event_banner,
						location,
						ticket_price,
						featuring,
						powered_by,
						verified,
					}) => {
						return (
							<EventContain key={id}>
								<EventContainBg bgImg={event_banner} />
								<EventMainContent>
									<EventTopSection>
										<EventImg src={event_banner} alt={event_title} />
										<EventTopInfo>
											<EventTopInfo01>
												<h1>{event_title}</h1>
												<p>by : {powered_by} </p>
											</EventTopInfo01>
											<EventTopInfo02>
												{Object.entries(ticket_price).map(([key, value]) => (
													<EventPriceTagContain key={key}>
														<h3>{key}</h3>
														<p>
															<span></span>
															<span></span>
															<span></span>
															<span></span>₦{thousandFormatter(value)}
														</p>
													</EventPriceTagContain>
												))}
											</EventTopInfo02>
											{ticketBought ? (
												<>
													<EventTopInfo03 prev onClick={handleToPreviewTicket}>
														Preview Ticket
													</EventTopInfo03>
												</>
											) : (
												<EventTopInfo03 onClick={handleToBuyTicket}>Buy Ticket</EventTopInfo03>
											)}
										</EventTopInfo>
									</EventTopSection>
									<EventBottomSection>
										<EventBottomL>
											<EventTopInfoMobile>
												<EventTopInfo01>
													<h1>{event_title}</h1>
													<p>by : {powered_by} </p>
												</EventTopInfo01>
												{ticketBought ? (
													<>
														<EventTopInfo03 prev onClick={handleToPreviewTicket}>
															Preview Ticket
														</EventTopInfo03>
													</>
												) : (
													<EventTopInfo03 onClick={handleToBuyTicket}>Buy Ticket</EventTopInfo03>
												)}
											</EventTopInfoMobile>
											<EventTopInfo02Mobile>
												{Object.entries(ticket_price).map(([key, value]) => (
													<EventPriceTagContain key={key}>
														<h3>{key}</h3>
														<p>
															<span></span>
															<span></span>
															<span></span>
															<span></span>₦{thousandFormatter(value)}
														</p>
													</EventPriceTagContain>
												))}
											</EventTopInfo02Mobile>
											<h4>{event_subtitle}</h4>
											<h2>About this event</h2>
											<p>{event_details}</p>
										</EventBottomL>
										<EventBottomR>
											<EventBottomRFeatures>
												<h2>Featuring</h2>
												<ul>
													{featuring.map((feature, i) => (
														<li key={i}>{feature}</li>
													))}
												</ul>
											</EventBottomRFeatures>
											<EventBottomRLocation>
												<h2>Location</h2>
												<p>{location}</p>
											</EventBottomRLocation>
											<EventBottomRPolicy>
												<h2>Refund Policy</h2>
												<p>Contact the organizer to request a refund.Eventbrite's fee is nonrefundable.</p>
											</EventBottomRPolicy>
										</EventBottomR>
									</EventBottomSection>
								</EventMainContent>
							</EventContain>
						);
					}
				)}
			</PageContain>

			{previewState && (
				<PreviewPrintTicket
					eventId={eventDetail[0]?.id}
					handlePreviewState={() => setPreviewState(false)}
					previewState={previewState}
				/>
			)}
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
							<Input
								type="text"
								placeholder="Full Name"
								onChange={(e) => setBuyerName((prevData) => ({ ...prevData, value: e.target.value }))}
							/>
						</Form.Item>
						<Form.Item label="Email" required tooltip="This is a required field">
							<Input
								type="email"
								placeholder="Email"
								onChange={(e) => setBuyerEmail((prevData) => ({ ...prevData, value: e.target.value }))}
							/>
						</Form.Item>
						<Space size="large" wrap>
							<Form.Item label="Gender" required tooltip="This is a required field">
								<Select
									placeholder="Select gender"
									onChange={(e) => setBuyerGender((prevData) => ({ ...prevData, value: e }))}
								>
									<Select.Option value="female">Female</Select.Option>
									<Select.Option value="male">Male</Select.Option>
									<Select.Option value="notsay">Prefer not to say</Select.Option>
								</Select>
							</Form.Item>
							<Form.Item label="Date of Birth" required tooltip="This is a required field">
								<DatePicker
									onChange={(a, b) => setBuyerBirthDate((prevData) => ({ ...prevData, value: b }))}
									format="DD-MM-YYYY"
								/>
							</Form.Item>
						</Space>
						<Form.Item label="Phone Number" required tooltip="This is a required field">
							<Input
								type="number"
								placeholder="Phone Number"
								onChange={(e) => setBuyerPhoneNumber((prevData) => ({ ...prevData, value: e.target.value }))}
							/>
						</Form.Item>
					</Form>
				</div>
			</BuyTicket>
		</>
	);
};

export default EventDetails;
