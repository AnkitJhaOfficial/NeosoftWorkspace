import React, { useState } from "react";
import Logo from "../assets/logo192.png";
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBNavbarNav,
	MDBNavbarLink,
	MDBIcon,
	MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar() {
	const [showNavSecond, setShowNavSecond] = useState(false);

	return (
		<MDBNavbar expand="lg" light bgColor="light" className="sticky-top">
			<MDBContainer fluid>
				<MDBNavbarBrand href="#">
					<img src={Logo} style={{ width: "4rem" }} alt="logo" />
				</MDBNavbarBrand>
				<MDBNavbarToggler
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setShowNavSecond(!showNavSecond)}
				>
					<MDBIcon icon="bars" fas />
				</MDBNavbarToggler>
				<MDBCollapse navbar show={showNavSecond}>
					<MDBNavbarNav>
						<MDBNavbarLink active aria-current="page" href="#">
							<b>Home</b>
						</MDBNavbarLink>
						<MDBNavbarLink href="#">
							<b>About</b>
						</MDBNavbarLink>
						<MDBNavbarLink href="#">
							<b>Contact</b>
						</MDBNavbarLink>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	);
}
