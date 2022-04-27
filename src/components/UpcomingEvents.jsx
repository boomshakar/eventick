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
import { mockedDataArr } from "../utils/Mockeddata";
import { Link } from "react-router-dom";
import { Badge, Input, Skeleton } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const UpcomingEvents = ({ isSearching, searchEvent, setIsSearching, searchData, setSearchEvent }) => {
	return (
		<div style={{ position: "relative" }}>
			<TopBar>
				<h2>Upcoming Events</h2>
				<TopBarFilter>
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
				</TopBarFilter>
			</TopBar>
			<CardContainer>
				{isSearching && searchEvent.length === 0 ? (
					<LoadingOutlined />
				) : isSearching && searchEvent.length >= 1 ? (
					searchEvent.map(({ id, event_title, event_date, event_banner, location, powered_by, verified }) => (
						<Card key={id}>
							{/* <Skeleton.Avatar active size="large" shape="square" /> */}
							<Link to={`/event/${id}`}>
								<Badge.Ribbon text={event_date}>
									<CardTopSection title={event_title}>
										<img src={event_banner} alt={event_title} />
										<CardTopTitle>
											<span>{verified ? <GoVerified /> : <GoUnverified style={{ color: "#000000" }} />}</span>
											{/* <Link to={`/event/${id}`}> */}
											<h5>{event_title.substring(0, 20).concat("...")}</h5>
											{/* </Link> */}
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
					))
				) : (
					mockedDataArr.map(({ id, event_title, event_date, event_banner, location, powered_by, verified }) => (
						<Card key={id}>
							{/* <Skeleton.Avatar active size="large" shape="square" /> */}
							<Link to={`/event/${id}`}>
								<Badge.Ribbon text={event_date}>
									<CardTopSection title={event_title}>
										<img src={event_banner} alt={event_title} />
										<CardTopTitle>
											<span>{verified ? <GoVerified /> : <GoUnverified style={{ color: "#000000" }} />}</span>
											{/* <Link to={`/event/${id}`}> */}
											<h5>{event_title.substring(0, 20).concat("...")}</h5>
											{/* </Link> */}
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
					))
				)}
			</CardContainer>
		</div>
	);
};

export default UpcomingEvents;
