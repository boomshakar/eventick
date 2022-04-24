import styled from "styled-components";
import homeBg from "../assets/Rectangle-12.png";
import Colour from "../utils/Color";

export const BannerContainer = styled.div`
	height: 92vh;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-size: cover;
	background-image: url(${homeBg});
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
`;

export const BannerContent = styled.div`
	position: relative;
	margin-top: 5%;
	display: flex;
	justify-content: space-between;
`;

export const MainEventImgContain = styled.div`\
width: 50%;
margin: 0 auto;
text-align: right;
`;
export const MainEventImg = styled.img`
	width: 100%;
	max-width: 600px;
`;
export const MainEventInfo = styled.div`
	width: 30%;
	margin: 0 auto;
	color: ${Colour.textWhite};

	h3 {
		font-size: 40px;
	}
	p {
		font-size: 18px;
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
	padding: 14px 20px;
	margin-right: 15px;
	cursor: pointer;
	font-size: 18px;

	&:hover {
		box-shadow: 0px 10px 50px rgba(61, 55, 241, 0.25);
	}
`;

export const HomeSearcBox = styled.div`
	position: absolute;
	bottom: 3%;
	width: 50%;
	left: 25%;
	right: auto;
	margin: 0 auto;
	${"" /* margin-left: -470px; */}
	padding: 1rem 2rem;
	z-index: 2;
	border-radius: 20px;
	box-shadow: 0px 10px 50px rgba(61, 55, 241, 0.25);
	display: flex;
	justify-content: space-around;
	background: ${Colour.navyBlue};
`;
export const HomeSearcOption = styled.div`
	color: ${Colour.textWhite};
	position: relative;
	display:; flex;
	flex-direction: column;
`;
