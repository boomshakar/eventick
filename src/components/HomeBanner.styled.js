import styled from "styled-components";
import homeBg from "../assets/Rectangle-12.png";
import Colour from "../utils/Color";

export const BannerContainer = styled.div`
	height: 92vh;
	width: 100%;
	position: relative;
	background-size: cover;
	background-image: url(${homeBg});

	@media only screen and (max-width: 900px) {
		height: 100%;
		width: 100%;
	}
`;

export const BannerOverlay = styled.div`
	background: linear-gradient(118.98deg, #ed4690 -2.11%, #5522cc 63.58%);
	mix-blend-mode: normal;
	opacity: 0.9;
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	padding-bottom: 10rem;
`;

export const BannerContent = styled.div`
	position: relative;
	margin-top: 5rem;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 900px) {
		flex-direction: column;
		margin-top: 3rem;
	}
`;

export const MainEventImgContain = styled.div`\
width: 50%;
margin: 0 auto;
text-align: right;

	@media only screen and (max-width: 900px) {
		width: 80%;
text-align: center;
	}
`;
export const MainEventImg = styled.img`
	width: 100%;
	max-width: 600px;
	margin: 0 auto;

	@media only screen and (max-width: 900px) {
		max-width: 350px;
	}
`;
export const MainEventInfo = styled.div`
	width: 30%;
	margin: 1.2rem auto 0;
	color: ${Colour.textWhite};

	h3 {
		font-size: clamp(1.5rem, 5vw, 2.2rem);
		font-weight: 700;
		color: ${Colour.textWhite};
	}
	p {
		font-size: clamp(0.7rem, 10vw, 1rem);
	}

	@media only screen and (max-width: 900px) {
		height: 100%;
		width: 80%;
		text-align: center;
	}
`;
export const EventBtnContain = styled.div`
	display: flex;
`;
export const EventBtn = styled.button`
	color: ${Colour.textWhite};
	background: ${(props) => (props.bg === "primary" ? Colour.pink : "transparent")};
	border: 1px solid ${(props) => (props.bg === "primary" ? Colour.pink : Colour.textWhite)};
	border-radius: 50px;
	outline: none;
	padding: 8px 16px;
	margin-right: 15px;
	cursor: pointer;
	font-size: clamp(0.5rem, 5vw, 0.9rem);

	&:hover {
		transition: all 0.3s ease-in-out;
		box-shadow: 0px 10px 50px rgba(61, 55, 241, 0.25);
		filter: brightness(0.9);
	}

	@media only screen and (max-width: 900px) {
		padding: 5px 9px;
	}
`;

export const HomeSearcBox = styled.div`
	position: absolute;
	bottom: 3%;
	width: 70%;
	left: 15%;
	right: auto;
	margin: 0 auto;
	${"" /* margin-left: -470px; */}
	padding: 1rem 2rem;
	z-index: 2;
	border-radius: 30px;
	box-shadow: 0px 10px 50px rgba(61, 55, 241, 0.25);
	display: flex;
	justify-content: space-around;
	background: ${Colour.navyBlue};

	@media only screen and (max-width: 900px) {
		display: none;
	}
`;
export const HomeSearcOption = styled.div`
	color: ${Colour.textWhite};
	position: relative;
`;
