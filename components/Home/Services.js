import React from "react";
import s from "../../styles/Home.module.css";
import "swiper/swiper.min.css";
import { svgs } from "../svg";

const Services = ({ id, content }) => {
	return (
		<div className={s.service}>
			<div className={s.service_img}>{svgs[id]}</div>
			<div className={s.text}>{content}</div>
		</div>
	);
};

export default Services;
