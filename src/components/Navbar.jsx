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
	background-color: ${({ navBg }) => (navBg ? "rgba(26, 32, 44, 0.9)" : "transparent")};
	backdrop-filter: ${({ navBg }) => (navBg ? "saturate(180%) blur(5px)" : "transparent")};
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
