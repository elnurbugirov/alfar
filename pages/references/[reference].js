import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import s from "../../styles/Reference.module.css";
import ReferencesText from "../../components/ReferencesText.js";
import Image from "next/image";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const reference = ({ data }) => {
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const id = router.query.reference - 2;
	console.log(data);
	console.log(id);

	return (
		<SimpleReactLightbox>
			<div className={s.reference}>
				<h1>Referanslar</h1>
				<div className={s.text_section}>
					<ReferencesText
						name={data[1].name_az}
						place={data[1].place_az}
						customer={data[1].customer_az}
						typeOfWorks={data[1].type_works_az}
						periodFrom={data[1].period_from}
						periodTo={data[1].period_to}
					/>
				</div>
				<SRLWrapper>
					<div className={s.gallery}>
						{data[0].map((cur) => (
							<div className={s.gallery_item} key={cur.id}>
								<a
									href={
										"http://alfar.corn.az/public/uploads/projectimages/" +
										cur.name
									}
								>
									<Image
										src={
											"http://alfar.corn.az/public/uploads/projectimages/" +
											cur.name
										}
										alt="Logo"
										onLoad={() => setLoading(false)}
										width={16}
										height={9}
										layout="responsive"
										quality="50"
									/>
								</a>
								{loading && <h1>Loading...</h1>}
							</div>
						))}
					</div>
				</SRLWrapper>
			</div>
		</SimpleReactLightbox>
	);
};

export async function getServerSideProps(context) {
	const res = await fetch(`http://alfar.corn.az/api/projects/2`);
	const data = await res.json();

	return {
		props: { data },
	};
}

export default reference;
