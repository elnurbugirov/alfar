import Head from "next/head";
import Image from "next/image";
import Services from "../components/Home/Services";
import ReferenceSection from "../components/Home/ReferenceSection";
import s from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCube, Lazy, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import { useMediaQuery } from "../components/useMediaQuery";

SwiperCore.use([EffectCube, Navigation, Autoplay, Lazy]);

export default function Home({ data }) {
	let isMobile = useMediaQuery("(max-width: 63.9375em)");
	console.log(data);
	const imgArr = [
		"bg-1.jpg",
		"bg-2.png",
		"bg-3.jpeg",
		"bg-4.jpg",
		"bg-5.jpg",
		"bg-7.jpg",
	];

	return (
		<>
			<Head>
				<title>Alfa R</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={s.container}>
				<Swiper
					className={s.swiper}
					navigation
					effect="cube"
					loop={true}
					lazy
					autoplay={{ delay: 3000 }}
					slidesPerView={1}
				>
					{imgArr.map((img) => (
						<SwiperSlide key={img}>
							<Image
								src={`/images/${img}`}
								alt="Picture of the author"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
							/>
							<h1 className={s.slider_title}>Lorem ipsum</h1>
						</SwiperSlide>
					))}
				</Swiper>
				<Swiper
					className={s.service_container}
					slidesPerView={isMobile ? 2 : 4}
				>
					{data.map((cur, index) => (
						<SwiperSlide>
							<Services id={index} key={index} content={cur.name_az} />
						</SwiperSlide>
					))}
				</Swiper>
				<ReferenceSection />
			</div>
		</>
	);
}

export async function getStaticProps(context) {
	const res = await fetch(`http://alfar.corn.az/api/category/`);
	const data = await res.json();

	return {
		props: { data },
	};
}
