import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import s from "../../../styles/Products.module.css";

const singleProduct = ({ data }) => {
	console.log(data);
	return (
		<div className={s.single_product}>
			<h1>Category Name</h1>

			<div className={s.single_product_img}>
				<Image
					src={
						"http://alfar.corn.az/uploads/img/products/" + data.product.image
					}
					alt="Logo"
					// onLoad={() => setLoading(false)}
					width={1}
					height={1}
					layout="responsive"
					quality="50"
				/>
				<h4>{data.product.name_az}</h4>
			</div>
			<div className={s.single_text}>
				<p>{data.details.detail_az}</p>
			</div>
		</div>
	);
};

export async function getServerSideProps(context) {
	const res = await fetch(
		`http://alfar.corn.az/api/category/ventilation-systems/6`
	);
	const data = await res.json();

	return {
		props: { data },
	};
}

export default singleProduct;
