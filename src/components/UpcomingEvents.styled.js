import styled from "styled-components";
import Colour from "../utils/Color";

export const TopBar = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	margin-top: 2rem;

	h2 {
		color: ${Colour.navyBlue};
		font-weight: bold;
	}
	@media only screen and (max-width: 900px) {
		margin-top: 1rem;
	}
`;
export const TopBarFilter = styled.div`
	display: flex;
	width: 30%;
	align-items: center;
	justify-content: space-between;
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;
export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 1449px;
	margin: 0 auto;
`;

export const CardTopSection = styled.div`
	position: relative;
	padding: 0.8rem;
	background: rgba(255, 255, 255, 0.5);
	border-radius: 20px;

	img {
		position: relative;
		width: 100%;
		height: 180px;
		border-radius: 20px;
	}
`;
export const CardBottomSection = styled.div`
	padding: 15px 10px;
	color: ${Colour.writeGrey};
`;
export const Card = styled.div`
	width: 300px;
	height: fit-content;
	margin: 0 auto;
	margin-bottom: 20px;
	background: ${Colour.bgGrey};
	transition: all 0.3s ease-in-out;

	&:hover {
		${"" /* borderbottomradius: 0px; */}
		box-shadow: 0px 24px 44px -26px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
	&:hover ${CardTopSection} {
		transition: all 0.3s ease-in-out;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}
	&:hover ${CardBottomSection} {
		transition: all 0.3s ease-in-out;
		color: ${Colour.hovWriteGrey};
		background: ${Colour.fadeBlack};
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
`;
export const CardTopTitle = styled.div`
	display: inline-flex;
	align-items: center;

	span,
	h5 {
		font-size: 18px;
		font-weight: 700;
	}
	h5 {
		margin-left: 15px;
		margin-bottom: 0px;
	}
`;
export const CardBottomLocateContainer = styled.div``;
export const CardBottomLocate = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	span {
		font-size: 18px;
		margin-right: 10px;
	}

	p {
		font-size: 12px;
		margin: 5px auto;
	}
`;
