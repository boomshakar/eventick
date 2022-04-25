import {
	Card,
	CardBottomLocate,
	CardBottomLocateContainer,
	CardBottomSection,
	CardBottomTitle,
	CardContainer,
	CardTopSection,
	CardTopTitle,
	TopBar,
	TopBarFilter,
} from "./UpcomingEvents.styled";
import { GoVerified, GoUnverified } from "react-icons/go";
import { HiOutlineLocationMarker } from "react-icons/hi";
import event1 from "../assets/event-1.png";
import event2 from "../assets/event-2.png";
import event3 from "../assets/event-3.png";
import event4 from "../assets/event-4.png";
import event5 from "../assets/event-5.png";
import event6 from "../assets/event-6.png";
import { mockedDataArr } from "../utils/Mockeddata";
import { Link } from "react-router-dom";
import { Badge, Skeleton } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const UpcomingEvents = () => {
	return (
		<div style={{ position: "relative" }}>
			<TopBar>
				<h2>Upcoming Events</h2>
				<TopBarFilter>
					<div>Weekdays</div>
					<div>Event Type</div>
					<div>Category</div>
				</TopBarFilter>
			</TopBar>
			<CardContainer>
				{mockedDataArr.map(({ id, event_title, event_date, event_banner, location, powered_by, verified }) => (
					<Card key={id}>
						{/* <Skeleton.Avatar active size="large" shape="square" /> */}
						<Link to={`/event/${id}`}>
							<Badge.Ribbon text={event_date}>
								<CardTopSection>
									<img src={event_banner} alt={event_title} />
									<CardTopTitle>
										<span>{verified ? <GoVerified /> : <GoUnverified />}</span>
										<Link to={`/event/${id}`}>
											<h5>{event_title}</h5>
										</Link>
									</CardTopTitle>
								</CardTopSection>
							</Badge.Ribbon>
						</Link>
						<CardBottomSection>
							<CardBottomLocateContainer>
								<CardBottomLocate>
									<span>
										<HiOutlineLocationMarker />
									</span>
									<p>{location}</p>
								</CardBottomLocate>
								<p>
									<strong>Powered By: </strong>
									{powered_by}
								</p>
							</CardBottomLocateContainer>
						</CardBottomSection>
					</Card>
				))}
			</CardContainer>
		</div>
	);
};

export default UpcomingEvents;
