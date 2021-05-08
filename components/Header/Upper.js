import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import s from "../../styles/Header.module.css";

const Upper = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const { locale } = router;

	const langChecker = (lang) => {
		return lang !== locale;
	};
	const myLang = router.locales.filter(langChecker);

	const langSwitcher = (e) => {
		const locale = e.target.innerText;
		router.push(router.asPath, router.asPath, { locale });
		setOpen(false);
	};

	return (
		<div className={s.upper}>
			<div className={s.upper_container}>
				<div className={s.contact}>
					<div className={s.phone}>
						<FaPhoneAlt />
						<p>+994 12 440 63 88</p>
					</div>
					<div className={s.mail}>
						<IoMdMail />
						<p>office@alfa-r.az</p>
					</div>
				</div>
				<div className={s.soc_lang}>
					<div className={s.soc}>
						<FaFacebook />
						<FaInstagram />
						<FaYoutube />
					</div>
					<div className={s.lang}>
						<div className={s.current} onClick={() => setOpen(!open)}>
							{locale}
						</div>
						{open && (
							<div className={s.sub_langs}>
								{myLang.map((lang) => (
									<button type="submit" key={lang} onClick={langSwitcher}>
										{lang}
									</button>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Upper;
