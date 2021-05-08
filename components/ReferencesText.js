import React from "react";
import s from "../styles/References.module.css"

const ReferencesText = ({name, place, customer, typeOfWorks, periodFrom, periodTo}) => {
	return (
		<div className={s.ref_right}>
			<p className={s.name}>
				Name: {name}
			</p>

			<p className={s.place}>
				Place: {place}
			</p>
			<p className={s.customer}>Customer: {customer}</p>
			<p className={s.type_of_works}>Type of works: {typeOfWorks}</p>
			<p className={s.period}>
				Period: {periodFrom}-{periodTo}
			</p>
		</div>
	);
};

export default ReferencesText;
