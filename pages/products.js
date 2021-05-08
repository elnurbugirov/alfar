import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import s from "../styles/Products.module.css";
import { svgs } from "../components/svg";
import en from "../components/Locales/en";
import az from "../components/Locales/az";
import ru from "../components/Locales/ru";

const products = ({ data }) => {
	const router = useRouter();
	const { locale } = router;
	const t = locale === "en" ? en : locale === "az" ? az : ru;

	const getMultiLang = (eng, aze, rus) => {
		return locale === "en" ? eng : locale === "az" ? aze : rus;
	};

    console.log(data);

	return (
		<div className={s.products}>
			<h1>{t.products}</h1>
			<div className={s.categories}>
				{data.map((cur, index) => (
                    <Link href="/products/[product]" as={"/products/" + cur.slug}>
                    
					<div className={s.category} key={cur.id}>
						<div className={s.svg_container}>{svgs[index]}</div>
						<h4>{getMultiLang(cur.name_en, cur.name_az, cur.name_ru)}</h4>
					</div>
                    </Link>
				))}
			</div>
		</div>
	);
};

export async function getStaticProps() {
	const res = await fetch(`http://alfar.corn.az/api/category/`);
	const data = await res.json();

	return {
		props: { data },
	};
}

export default products;
