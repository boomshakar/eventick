import styled from "styled-components";
import Colour from "../utils/Color";

export const PreviewTicketContainer = styled.div`
	width: 100%;
	height: 100%;
`;
export const PreviewTicketContent = styled.div`
	width: fit-content;
	margin: 1rem auto;
	display: flex;
	justify-content: center;
	flex-direction: column;
	text-align: center;

	p {
		font-size: 18px;
		font-weight: bold;
		margin-top: 20px;
	}
`;
