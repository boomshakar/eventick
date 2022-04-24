import styled from "styled-components";
import Colour from "../utils/Color";

export const PageContain = styled.div`
	position: relative;
	margin-top: 4%;
`;
export const EventContain = styled.div`
	position: relative;
`;
export const EventContainBg = styled.div`
	background-image: url(${(props) => props.bgImg});
	height: 50vh;
	background-repeat: no-repeat;
	background-size: 100% 50vh;
	filter: blur(30px);
	-webkit-filter: blur(30px);
`;
export const EventMainContent = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	width: 80%;
	max-width: 1200px;
`;

export const EventTopSection = styled.section`
	width: 100%;
	height: 100%;
	max-height: 500px;
	display: flex;
`;
export const EventImg = styled.img`
	width: 70%;
`;
export const EventTopInfo = styled.div`
	width: 30%;
	display: flex;
	background: ${Colour.textWhite};
	flex-direction: column;
	flex-shrink: 0;
	justify-content: space-between;
`;
export const EventTopInfo01 = styled.div``;
export const EventTopInfo02 = styled.div`
	display: flex;
	flex-direction: column;
	${"" /* margin: 10% auto; */}
`;
export const EventTopInfo03 = styled.button`
	width: fit-content;
	padding: 0.8rem 1.5rem;
	border-radius: 20px;
	outline: none;
	font-size: 16px;
	color: ${Colour.textWhite};
	background: ${Colour.pink};
	border: 1px solid ${Colour.pink};

	&:disabled {
		background: ${Colour.justBlue};
		border: 1px solid ${Colour.justBlue};
	}
`;
