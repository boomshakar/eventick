import styled from "styled-components";
import Colour from "../utils/Color";

export const PageContain = styled.div`
	position: relative;
	${"" /* margin-top: 4%; */}
	${"" /* margin-top: 2rem; */}
`;
export const EventContain = styled.div`
	position: relative;
`;
export const EventContainBg = styled.div`
	background-image: url(${(props) => props.bgImg});
	height: 50vh;
	background-repeat: no-repeat;
	background-size: 100%;
	filter: blur(30px);
	-webkit-filter: blur(30px);
`;
export const EventMainContent = styled.div`
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -40%);
	z-index: 2;
	width: 90%;
	height: 100%;
	max-width: 1200px;
`;

export const EventTopSection = styled.section`
	width: 100%;
	display: flex;

	@media only screen and (max-width: 900px) {
		flex-direction: column;
	}
`;
export const EventImg = styled.img`
	width: 70%;

	@media only screen and (max-width: 900px) {
		width: 100%;
		height: 62%;
	}
`;
export const EventTopInfo = styled.div`
	width: 30%;
	display: flex;
	background: ${Colour.grey};
	flex-direction: column;
	flex-shrink: 0;
	justify-content: space-between;

	@media only screen and (max-width: 900px) {
		display: none;
	}
`;
export const EventTopInfoMobile = styled.div`
	display: none;

	@media only screen and (max-width: 900px) {
		width: 100%;
		display: flex;
		background: ${Colour.grey};
		flex-direction: column;
		flex-shrink: 0;
		justify-content: space-between;
	}
`;
export const EventTopInfo01 = styled.div`
	padding: 10px 12px 10px;
	h1 {
		font-size: clamp(0.5em, 10vw, 1em);
		font-weight: 600;
		color: ${Colour.navyBlue};
	}
	p {
		font-size: clamp(0.3em, 10vw, 1em);
		font-weight: 500;
		color: ${Colour.writeGrey};
	}
`;
export const EventTopInfo02 = styled.div`
	display: none;
	@media only screen and (min-width: 1210px) {
		padding: 10px 10px 10px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
`;
export const EventTopInfo02Mobile = styled.div`
	display: none;
	@media only screen and (max-width: 1209px) {
		padding: 10px 10px 10px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
`;
export const EventPriceTagContain = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	text-align: center;
	text-transform: capitalize;

	h3 {
		color:  ${Colour.navyBlue};
		font-size: clamp(0.5em, 10vw, .8em);
	}
	p {
		position: relative;
		border: 1px solid ${Colour.pink};
		border-radius: 10px;
		padding: 0 0.5rem;
		color:  ${Colour.navyBlue};
		font-weight: bold;
		font-size: clamp(0.3em, 10vw, .8em);
		overflow: hidden;
		transition: 0.5s;
		letter-spacing: 4px;
		-webkit-box-reflect: below 1px linear-gradient(transparent, #0005);


	& span{
		position: absolute;
		display: block;
	}
	

	& span:nth-child(1) {
			top: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background: linear-gradient(90deg, transparent, ${Colour.pink});
			animation: animate1 1s linear infinite;

			@keyframes animate1{
				0%
				{
					left: -100%;
				}
				50%, 100%
				{
					left: 100%;
				}
			}
		}
	& span:nth-child(2) {
				top: -100px;
			right: 0;
			width: 2px;
			height: 100%;
			background: linear-gradient(180deg, transparent, ${Colour.pink});
			animation: animate2 1s linear infinite;
			animation-delay: 0.25s;

			@keyframes animate2{
				0%
				{
					top: -100%;
				}
				50%, 100%
				{
					top: 100%;
				}
			}
		}
	& span:nth-child(3) {
				bottom: 0;
			right: -100%;
			width: 100%;
			height: 2px;
			background: linear-gradient(270deg, transparent, ${Colour.pink});
			animation: animate3 1s linear infinite;
			animation-delay: 0.5s;

			@keyframes animate3{
				0%
				{
					right: -100%;
				}
				50%, 100%
				{
					right: 100%;
				}
			}
		}
	& span:nth-child(4) {
				bottom: -100%;
			left: 0;
			width: 2px;
			height: 100%;
			background: linear-gradient(360deg, transparent, ${Colour.pink});
			animation: animate4 1s linear infinite;
			animation-delay: 0.75s;

			@keyframes animate4{
				0%
				{
					bottom: -100%;
				}
				50%, 100%
				{
					bottom: 100%;
				}
			}
		}
	}
}
`;
export const EventTopInfo03 = styled.button`
	width: fit-content;
	padding: 0.3em 1.5em;
	border-radius: 20px;
	outline: none;
	font-size: clamp(0.4em, 10vw, 0.9em);
	margin: 0 auto;
	color: ${Colour.textWhite};
	background: ${(prop) => (prop.prev ? Colour.justBlue : Colour.pink)};
	border: 1px solid ${(prop) => (prop.prev ? Colour.justBlue : Colour.pink)};
	cursor: pointer;

	&:disabled {
		background: ${Colour.justBlue};
		border: 1px solid ${Colour.justBlue};
	}
	&:hover {
		transition: all 0.3s ease-in-out;
		filter: brightness(0.9);
	}

	@media only screen and (max-width: 900px) {
		padding: 0.3em 0.9em;
	}
`;

export const EventBottomSection = styled.div`
	background: ${Colour.grey};
	display: flex;

	@media only screen and (max-width: 900px) {
		flex-direction: column;
	}
`;
export const EventBottomL = styled.div`
	width: 70%;
	padding: 1.5rem 2rem;
	font-size: clamp(0.8rem, 3vw, 1.2em);

	h2 {
		font-size: clamp(0.8rem, 5vw, 1.5rem);
		font-weight: 700;
		color: ${Colour.navyBlue};
	}

	p {
		font-size: clamp(0.8rem, 3vw, 1rem);
		line-height: 1.8;
	}
	@media only screen and (max-width: 900px) {
		width: 100%;
	}
`;
export const EventBottomR = styled.div`
	width: 30%;
	padding: 1.5rem 2rem;

	@media only screen and (max-width: 900px) {
		width: 100%;
	}
`;
export const EventBottomRFeatures = styled.div`
	h2 {
		font-size: clamp(0.8rem, 5vw, 1.2rem);
		font-weight: 700;
		color: ${Colour.navyBlue};
	}
	li {
		font-size: clamp(0.8rem, 3vw, 1rem);
		line-height: 1.8;
	}
`;
export const EventBottomRLocation = styled.div`
	h2 {
		font-size: clamp(0.8rem, 5vw, 1.2rem);
		font-weight: 700;
		color: ${Colour.navyBlue};
	}
	p {
		font-size: clamp(0.8rem, 3vw, 1rem);
		line-height: 1.8;
	}
`;
export const EventBottomRPolicy = styled.div`
	h2 {
		font-size: clamp(0.8rem, 5vw, 1.2rem);
		font-weight: 700;
		color: ${Colour.navyBlue};
	}
	p {
		font-size: clamp(0.8rem, 3vw, 1rem);
		line-height: 1.8;
	}
`;
