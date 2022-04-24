import styled from "styled-components";
import Colour from "../utils/Color";

export const TopBar = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const TopBarFilter = styled.div`
	display: flex;
	width: 30%;
	align-items: center;
	justify-content: space-between;
`;
export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
export const Card = styled.div`
	width: 300px;
	margin: 0 auto;
	margin-bottom: 20px;
	background: rgba(255, 255, 255, 0.5);
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	transition: all 0.3s ease-in-out;

	&:hover {
		${"" /* borderbottomradius: 0px; */}
		box-shadow: 0px 24px 44px -26px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
`;

export const CardTopSection = styled.div`
	position: relative;

	img {
		position: relative;
		width: 100%;
		height: 100%;
	}

	span {
		background: ${Colour.textWhite};
		color: ${Colour.textBlack};
		position: absolute;
		top: 0;
		right: 10%;
	}
`;
export const CardBottomSection = styled.div`
	button {
		outline: none;
		font-size: 14px;
		font-weight: bold;
		color: ${Colour.textWhite};
		border: 2px solid ${Colour.textWhite};
		background-color: ${Colour.justBlue};
		border-radius: 50px;
		padding: 8px 12px;
	}
`;
export const CardBottomTitle = styled.div`
	display: inline-flex;
	align-items: center;

	h5 {
		margin: 5px auto;
	}
`;
export const CardBottomLocate = styled.div`
	display: inline-flex;
	align-items: center;

	p {
		font-size: 12px;
		margin: 5px auto;
	}

	button {
		outline: none;
		font-size: 14px;
		font-weight: bold;
		color: ${Colour.textWhite};
		border: 2px solid ${Colour.textWhite};
		background-color: ${Colour.justBlue};
		border-radius: 50px;
		padding: 8px 12px;
	}
`;
