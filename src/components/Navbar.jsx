import { Link } from "react-router-dom";
import styled from "styled-components";

import eventickLogo from "../assets/eventick-logo.svg";

const Homenav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	magin: 0;
	z-index: 10;
	${"" /* background: transparent; */}
	backdrop-filter: saturate(180%) blur(5px);
	${"" /* background: blue; */}
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.div`
	background-image: url(${eventickLogo});
	repeat: no-repeat;
	background-size: cover;
	width: 180px;
	height: 40px;
`;

const Navbar = () => {
	return (
		<Homenav>
			<Link to="/">
				<Logo />
			</Link>
			<Link to="/event/1">Event</Link>
		</Homenav>
	);
};

export default Navbar;
