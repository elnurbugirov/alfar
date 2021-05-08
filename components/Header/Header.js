import React, { useState } from "react";
import Upper from "./Upper";
import { useMediaQuery } from "../useMediaQuery";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import s from "../../styles/Header.module.css";

const Header = () => {
	let isMobile = useMediaQuery("(max-width: 63.9375em)");
	const [nav, setNav] = useState(false);

	const navOpen = () => {
		setNav(!nav);
	};

	return (
		<div className={s.header}>
			<Upper />
			<div className={s.lower}>
				<div className={s.lower_container}>
					<div className={s.logo}>
						<Link href="/">
							<a>
								<Image
									src="/images/Alfa-logo-red.png"
									alt="Logo"
									width={70}
									height={50}
								/>
							</a>
						</Link>
					</div>
					{isMobile ? nav ? <IoClose onClick={navOpen} /> : <IoMenu onClick={navOpen} /> : <Navbar sNav={s.nav} closed={() => setNav(false)} />}
					{nav && isMobile ? <Navbar sNav={s.nav + " " + s.opened} closed={() => setNav(false)}  /> : null}
				</div>
			</div>
		</div>
	);
};

export default Header;
