import {
	BannerContainer,
	EventBtnContain,
	EventBtn,
	HomeSearcBox,
	BannerCarousel,
	SliderContentContainer,
	SliderContentImgBlk,
	SliderContentDetailBlk,
} from "../styled/HomeBanner.styled";
import eventImg from "../assets/pngguru-2.png";
import eventImg2 from "../assets/pngguru-3.png";
import eventImg3 from "../assets/pngguru-4.png";
import { Input } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import searchData from "../utils/searchData.js";
import { mockedDataArr } from "../utils/Mockeddata";
import { showToastMessage } from "../utils/Toast";

const HomeBanner = ({ isSearching, setIsSearching, setSearchEvent }) => {
	const handleSoldOut = () => {
		showToastMessage({
			type: "error",
			title: "Sorry",
			description: "The ticket for this event has already been sold out",
		});
	};
	return (
		<div style={{ postion: "relative", height: "100%" }}>
			<BannerContainer>
				<BannerCarousel>
					<Swiper
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 4500,
							disableOnInteraction: false,
						}}
						speed={200}
						navigation={true}
						modules={[Navigation, Autoplay]}
						className="mySwiper"
					>
						<SwiperSlide>
							<SliderContentContainer>
								<SliderContentImgBlk>
									<img src={eventImg} alt="" />
								</SliderContentImgBlk>
								<SliderContentDetailBlk>
									<h3>SBS MTV The Kpop Show Ticket Package</h3>
									<p>
										Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop
										recording.
									</p>
									<EventBtnContain>
										<EventBtn onClick={handleSoldOut} bg="primary">
											Get Ticket
										</EventBtn>
										<EventBtn onClick={handleSoldOut}>Learn More</EventBtn>
									</EventBtnContain>
								</SliderContentDetailBlk>
							</SliderContentContainer>
						</SwiperSlide>
						<SwiperSlide>
							<SliderContentContainer>
								<SliderContentImgBlk>
									<img src={eventImg2} alt="" />
								</SliderContentImgBlk>
								<SliderContentDetailBlk>
									<h3>SBS MTV The Kpop Show Ticket Package</h3>
									<p>
										Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop
										recording.
									</p>
									<EventBtnContain>
										<EventBtn onClick={handleSoldOut} bg="primary">
											Get Ticket
										</EventBtn>
										<EventBtn onClick={handleSoldOut}>Learn More</EventBtn>
									</EventBtnContain>
								</SliderContentDetailBlk>
							</SliderContentContainer>
						</SwiperSlide>
						<SwiperSlide>
							<SliderContentContainer>
								<SliderContentImgBlk>
									<img src={eventImg3} alt="" />
								</SliderContentImgBlk>
								<SliderContentDetailBlk>
									<h3>SBS MTV The Kpop Show Ticket Package</h3>
									<p>
										Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop
										recording.
									</p>
									<EventBtnContain>
										<EventBtn onClick={handleSoldOut} bg="primary">
											Get Ticket
										</EventBtn>
										<EventBtn onClick={handleSoldOut}>Learn More</EventBtn>
									</EventBtnContain>
								</SliderContentDetailBlk>
							</SliderContentContainer>
						</SwiperSlide>
					</Swiper>
				</BannerCarousel>
				<HomeSearcBox>
					<Input
						type="text"
						bordered={false}
						placeholder="Search for Events, Time or Location"
						onChange={(event) => {
							setIsSearching(true);
							searchData(event, mockedDataArr, setSearchEvent, ["event_title", "event_date", "location"]);
						}}
						allowClear
					/>
				</HomeSearcBox>
			</BannerContainer>
		</div>
	);
};

export default HomeBanner;
