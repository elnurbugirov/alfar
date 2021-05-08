import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import s from "../../styles/Products.module.css";

const product = ({ data }) => {
	const productSlug = useRouter().asPath.slice(10);
	console.log(data);
	return (
		<div className={s.single_product}>
			<h1>Category Name</h1>
			<div className={s.product_container}>
				{data.map((cur) => (
					<Link
						href="/products/product/[singleProducts]"
						as={"/products/product/" + cur.id}
					>
						<div className={s.image_container} key={cur.id}>
							<div className={s.product_img}>
								<Image
									src={"http://alfar.corn.az/uploads/img/products/" + cur.image}
									alt="Logo"
									// onLoad={() => setLoading(false)}
									width={1}
									height={1}
									layout="responsive"
									quality="50"
								/>
							</div>
							<h3>{cur.name_az}</h3>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export async function getServerSideProps() {
	const res = await fetch(
		`http://alfar.corn.az/api/category/ventilation-systems`
	);
	const data = await res.json();

	return {
		props: { data },
	};
}

export default product