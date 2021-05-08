import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import en from "../Locales/en";
import az from "../Locales/az";
import ru from "../Locales/ru";

const Navbar = ({sNav, closed}) => {
	const router = useRouter();
	const { locale } = router;
	const t = locale === "en" ? en : (locale === "az" ? az : ru);


	return (
		<div className={sNav}>
			<ul onClick={closed}>
				<li>
					<Link href="/about">
						<a>{t.about}</a>
					</Link>
				</li>
				<li>
					<Link href="/products">
						<a>{t.products}</a>
					</Link>
				</li>
				<li>
					<Link href="/partners">
						<a>{t.partners}</a>
					</Link>
				</li>
				<li>
					<Link href="/references">
						<a>{t.references}</a>
					</Link>
				</li>
				<li>
					<Link href="/lisans">
						<a>{t.lisans}</a>
					</Link>
				</li>
				<li>
					<Link href="/contacts">
						<a>{t.contacts}</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
