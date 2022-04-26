import {
	BannerContainer,
	BannerOverlay,
	BannerContent,
	MainEventImgContain,
	MainEventImg,
	MainEventInfo,
	EventBtnContain,
	EventBtn,
	HomeSearcBox,
	HomeSearcOption,
} from "./HomeBanner.styled";
import eventImg from "../assets/pngguru-2.png";
import { Form, Input } from "antd";

const HomeBanner = () => {
	return (
		<div style={{ postion: "relative", height: "100%" }}>
			<BannerContainer>
				{/* <BannerOverlay> */}
				<BannerContent>
					<MainEventImgContain>
						<MainEventImg src={eventImg} alt="" />
					</MainEventImgContain>
					<MainEventInfo>
						<h3>SBS MTV The Kpop Show Ticket Package</h3>
						<p>
							Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop
							recording.
						</p>
						<EventBtnContain>
							<EventBtn bg="primary">Get Ticket</EventBtn>
							<EventBtn>Learn More</EventBtn>
						</EventBtnContain>
					</MainEventInfo>
				</BannerContent>
				{/* </BannerOverlay> */}
				<HomeSearcBox>
					<Form.Item label="Search Event">
						<Input type="text" placeholder="" onChange={(e) => {}} />
					</Form.Item>
					<Form.Item label="Place">
						<Input type="text" placeholder="" onChange={(e) => {}} />
					</Form.Item>
					<Form.Item label="Time">
						<Input type="text" placeholder="" onChange={(e) => {}} />
					</Form.Item>
				</HomeSearcBox>
			</BannerContainer>
		</div>
	);
};

export default HomeBanner;
