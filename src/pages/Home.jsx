import HomeBanner from "../components/HomeBanner";
import UpcomingEvents from "../components/UpcomingEvents";

const Home = () => {
	return (
		<div style={{ backgroundColor: "#e5e5e5" }}>
			{/* <h1>Home</h1> */}
			<HomeBanner />
			<UpcomingEvents />
		</div>
	);
};

export default Home;
