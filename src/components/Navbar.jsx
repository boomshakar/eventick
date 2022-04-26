import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import eventickLogo from "../assets/icons/eventick-logo.svg";

const Homenav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	max-height: 80px;
	padding: 0.5rem 1rem;
	magin: 0;
	z-index: 10;
	transition: all 0.3s ease-in-out;
	background-color: ${({ navBg }) => (navBg ? "rgba(39, 26, 0, 0.5)" : "transparent")};
	backdrop-filter: ${({ navBg }) => (navBg ? "saturate(180%) blur(5px)" : "transparent")};
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
	const [navBar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 66) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	useEffect(() => {
		changeBackground();
		// adding the event when scroll change Logo
		window.addEventListener("scroll", changeBackground);
	});
	return (
		<Homenav navBg={navBar}>
			<Link to="/">
				<Logo />
			</Link>
		</Homenav>
	);
};

export default Navbar;
