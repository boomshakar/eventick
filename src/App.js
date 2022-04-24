import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import ErrorPage from "./pages/404";

function App() {
	return (
		<Router>
			{/* <div style={{ position: "relative" }}> */}
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/event/:eventId" element={<EventDetails />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			{/* </div> */}
		</Router>
	);
}

export default App;
