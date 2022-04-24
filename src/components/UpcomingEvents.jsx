import {
	Card,
	CardBottomLocate,
	CardBottomSection,
	CardBottomTitle,
	CardContainer,
	CardTopSection,
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

const UpcomingEvents = () => {
	return (
		<div style={{ position: "relative", zIdex: "100" }}>
			<TopBar>
				<h2>Upcoming Events</h2>
				<TopBarFilter>
					<div>da</div>
					<div>da</div>
					<div>da</div>
				</TopBarFilter>
			</TopBar>
			<CardContainer>
				{mockedDataArr.map(({ id, event_title, event_date, event_banner, location, powered_by, verified }) => (
					<Card key={id}>
						<Link to={`/event/${id}`}>
							<CardTopSection>
								<img src={event_banner} alt={event_title} />
								<span>{event_date}</span>
							</CardTopSection>
						</Link>
						<CardBottomSection>
							<CardBottomTitle>
								<span>{verified ? <GoVerified /> : <GoUnverified />}</span>
								<Link to={`/event/${id}`}>
									<h5>{event_title}</h5>
								</Link>
							</CardBottomTitle>
							<CardBottomTitle>
								<p>{event_date}</p>
							</CardBottomTitle>
							<CardBottomLocate>
								<span>
									<HiOutlineLocationMarker />
								</span>
								<p>{location}</p>
								<button>Book Now</button>
							</CardBottomLocate>
							<p>{powered_by}</p>
							<button>Book Now</button>
						</CardBottomSection>
					</Card>
				))}
			</CardContainer>
		</div>
	);
};

export default UpcomingEvents;
