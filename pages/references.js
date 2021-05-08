import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import s from "../styles/References.module.css";
import en from "../components/Locales/en";
import az from "../components/Locales/az";
import ru from "../components/Locales/ru";
import Image from "next/image";
import ReferencesText from "../components/ReferencesText";

const references = ({ data }) => {
	const [loading, setLoading] = useState(true)
	const router = useRouter();
	const { locale } = router;
	const t = locale === "en" ? en : locale === "az" ? az : ru;

	const getMultiLang = (eng, aze, rus) => {
		return locale === "en" ? eng : locale === "az" ? aze : rus;
	};

	return (
		<div className={s.references}>
			<h1>{t.references}</h1>
			<div className={s.container}>
				{data.map((cur) => (
					<div className={s.ref_block} key={cur.id}>
						<div className={s.ref_left}>
							<Link href="/references/[reference]" as={`/references/2`}>
								<a>
									{loading && <h1>Loading...</h1>}
									<Image
										src={
											"http://alfar.corn.az/uploads/img/projects/" +
											data[0].image
										}
										alt="Logo"
										onLoad={() => setLoading(false)}
										width={10}
										height={6}
										layout="responsive"
										quality="25"
									/>
									<div className={s.effect}></div>
									<div className={s.img_name}>{cur.name_az}</div>
								</a>
							</Link>
						</div>
						<ReferencesText
							name={getMultiLang(cur.name_en, cur.name_az, cur.name_ru)}
							place={getMultiLang(cur.place_en, cur.place_az, cur.place_ru)}
							customer={cur.customer_az}
							typeOfWorks={cur.type_works_az}
							periodFrom={cur.period_from}
							periodTo={cur.period_to}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export async function getStaticProps(context) {
	const res = await fetch(`http://alfar.corn.az/api/projects/`);
	const data = await res.json();

	return {
		props: { data },
	};
}

export default references;
