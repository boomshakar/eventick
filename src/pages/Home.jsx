import { useState } from "react";
import HomeBanner from "../components/HomeBanner";
import UpcomingEvents from "../components/UpcomingEvents";

const Home = () => {
	const [searchEvent, setSearchEvent] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	return (
		<div style={{ backgroundColor: "#e5e5e5" }}>
			<HomeBanner isSearching={isSearching} setIsSearching={setIsSearching} setSearchEvent={setSearchEvent} />
			<UpcomingEvents isSearching={isSearching} searchEvent={searchEvent} />
		</div>
	);
};

export default Home;
