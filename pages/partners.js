import React from 'react'
import Head from "next/head";
import s from "../styles/Partners.module.css"
import { useRouter } from "next/router";
import en from "../components/Locales/en";
import az from "../components/Locales/az";
import ru from "../components/Locales/ru";

const partners = () => {
    const router = useRouter();
	const { locale } = router;
	const t = locale === "en" ? en : (locale === "az" ? az : ru);

    return (
        <div className={s.partners}>
            <h1>{t.partners}</h1>
            <div className={s.container}>
                <div className={s.partner}></div>
                <div className={s.partner}></div>
                <div className={s.partner}></div>
                <div className={s.partner}></div>
                <div className={s.partner}></div>
                <div className={s.partner}></div>
                <div className={s.partner}></div>
                <div className={s.partner}></div>
                <div className={s.partner}></div>
            </div>
        </div>
    )
}

export default partners
