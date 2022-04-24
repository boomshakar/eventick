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

const HomeBanner = () => {
	return (
		<div style={{ postion: "relative", height: "100vh" }}>
			<BannerContainer>
				<BannerOverlay>
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
				</BannerOverlay>
			</BannerContainer>
			<HomeSearcBox>
				<HomeSearcOption>
					<label htmlFor="">Search Event</label>
					<input type="text" name="" />
				</HomeSearcOption>
				<HomeSearcOption>
					<label htmlFor="">Place</label>
					<input type="text" name="" />
				</HomeSearcOption>
				<HomeSearcOption>
					<label htmlFor="">Time</label>
					<input type="text" name="" />
				</HomeSearcOption>
			</HomeSearcBox>
		</div>
	);
};

export default HomeBanner;
