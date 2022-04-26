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
	BannerCarousel,
	SliderContentContainer,
	SliderContentImgBlk,
	SliderContentDetailBlk,
} from "./HomeBanner.styled";
import eventImg from "../assets/pngguru-2.png";
import { Form, Input } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const HomeBanner = () => {
	return (
		<div style={{ postion: "relative", height: "100%" }}>
			<BannerContainer>
				<BannerCarousel>
					<Swiper
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 2500,
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
										<EventBtn bg="primary">Get Ticket</EventBtn>
										<EventBtn>Learn More</EventBtn>
									</EventBtnContain>
								</SliderContentDetailBlk>
							</SliderContentContainer>
						</SwiperSlide>
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
										<EventBtn bg="primary">Get Ticket</EventBtn>
										<EventBtn>Learn More</EventBtn>
									</EventBtnContain>
								</SliderContentDetailBlk>
							</SliderContentContainer>
						</SwiperSlide>
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
										<EventBtn bg="primary">Get Ticket</EventBtn>
										<EventBtn>Learn More</EventBtn>
									</EventBtnContain>
								</SliderContentDetailBlk>
							</SliderContentContainer>
						</SwiperSlide>
					</Swiper>
				</BannerCarousel>
				{/* <BannerContent>
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
				</BannerContent> */}
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
