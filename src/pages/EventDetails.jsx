import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockedDataArr } from "../utils/Mockeddata";
import { EventContain, EventImg, PageContain } from "./EventDetails.styled";

const EventDetails = () => {
	const { eventId } = useParams();
	const [eventDetail, setEventDetail] = useState([]);

	useEffect(() => {
		const result = mockedDataArr.filter((data) => data.id === eventId);
		setEventDetail(result);
		console.log({ result });
	}, []);

	return (
		<PageContain>
			{eventDetail?.map(({ id, event_title, event_date, event_banner, location, powered_by, verified }) => {
				return (
					<EventContain key={id}>
						<EventImg src={event_banner} alt={event_title} />
					</EventContain>
				);
			})}
		</PageContain>
	);
};

export default EventDetails;
