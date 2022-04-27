import Cookie from "js-cookie";
import QRCode from "react-qr-code";
import ReactToPrint from "react-to-print";
import { Modal } from "antd";
import { PreviewTicketContainer, PreviewTicketContent } from "../styled/PreviewPrint.styled";
import { useRef } from "react";
import { EventTopInfo03 } from "../styled/EventDetails.styled";

const PreviewPrintTicket = ({ eventId, previewState, handlePreviewState }) => {
	let checkTicketStatus = Cookie.get(`event${eventId}`);
	checkTicketStatus = JSON.parse(checkTicketStatus) || null;
	let printRef = useRef();
	return (
		<div>
			<Modal title="Preview Ticket" visible={previewState} footer={false} onCancel={handlePreviewState}>
				<div>
					<PreviewTicketContainer>
						<PreviewTicketContent ref={(el) => (printRef = el)}>
							<QRCode
								value={
									`${checkTicketStatus?.buyer_name}-is-verified-with-${checkTicketStatus?.buyer_email}-of-gender-${checkTicketStatus?.buyer_gender}` ||
									"Not Verified"
								}
								title={checkTicketStatus?.buyer_name || "Not Verified"}
							/>
							<p>{checkTicketStatus?.buyer_name}</p>
						</PreviewTicketContent>
						<ReactToPrint trigger={() => <EventTopInfo03>Print</EventTopInfo03>} content={() => printRef} />
					</PreviewTicketContainer>
				</div>
			</Modal>
		</div>
	);
};

export default PreviewPrintTicket;
