import React from "react";
import Image from "next/image";
import { useRouter} from "next/router";
import s from "../../styles/Home.module.css";

const ReferenceSection = () => {
	const imgArr = ["bg-4.jpg", "bg-5.jpg", "bg-6.jpg", "bg-7.jpg"];
	const router = useRouter()
	return (
		<div className={s.reference_section}>
			<h1>Referanslar</h1>
			<div className={s.reference_imgs}>
				{imgArr.map((img) => (
					<div key={img} className={s.imgs_container}>
						<Image
							src={`/images/${img}`}
							alt="Picture of the author"
							width={10}
							height={6}
							quality="50"
							layout="responsive"
						/>
						<p>bulvar tower</p>
					</div>
				))}
			</div>
			<button onClick={() => router.push("/references")}>BÜTÜN REFERANSLAR</button>
		</div>
	);
};

export default ReferenceSection;
