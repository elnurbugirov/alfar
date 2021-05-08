import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { MdLocationOn, MdPhoneIphone, MdMail } from "react-icons/md";
import s from "../styles/Contacts.module.css";
import en from "../components/Locales/en";
import az from "../components/Locales/az";
import ru from "../components/Locales/ru";

const contacts = () => {
	const router = useRouter();
	const { locale } = router;
	const t = locale === "en" ? en : locale === "az" ? az : ru;
	return (
		<>
			<Head>
				<title>Elaqe</title>
			</Head>

			<div className={s.contacts}>
				<h1>{t.contacts}</h1>
				<div className={s.connection}>
					<div className={s.infos}>
						<div className={s.location}>
							<MdLocationOn />
							<p>Azərbaycan, AZ1007, Bakı şəh., Feyzulla, Qasımzadə küç., 9</p>
						</div>
						<div className={s.phone}>
							<MdPhoneIphone />
							<p>Tel./Faks: (+994 12) 440 63 88</p>
						</div>
						<div className={s.mail}>
							<MdMail />
							<p>office@alfa-r.az</p>
						</div>
					</div>
					<div className={s.contact_form_map}>
						<form>
							<input type="text" placeholder={t.fullname} />
							<input type="text" placeholder={t.phone} />
							<input type="email" placeholder="Email" required />
							<textarea type="text" placeholder={t.mail}></textarea>
							<button>{t.send}</button>
						</form>
						<div className={s.map}>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.535002209185!2d49.82540721564851!3d40.396997364762846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d7e6e9ca719%3A0xf18e6cd800c0014d!2s118%20Jalil%20Mammadguluzadeh%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1593065870949!5m2!1sen!2s"
								width="100%"
								height="100%"
								frameBorder="0"
								scrolling="no"
								marginHeight="0"
								marginWidth="0"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default contacts;
