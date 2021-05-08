import Image from "next/image";
import React from "react";
import s from "../styles/About.module.css";

const about = () => {
	return (
		<div className={s.about}>
			<h1>Haqqımızda</h1>
			<div className={s.img_container}>
				<Image
					src={`/images/bg-5.jpg`}
					alt="Picture of the author"
					width={10}
					height={6}
					quality="50"
					layout="responsive"
				/>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex
				doloremque beatae pariatur cum rem magnam vitae nesciunt aliquam dolores
				sunt dignissimos amet, ab provident magni sequi ipsa commodi dicta
				minima odio illum suscipit quos repellat. Obcaecati similique tenetur
				impedit aliquid porro ducimus accusamus maxime eligendi libero nesciunt
				quod eius, magnam nulla sed quia saepe autem adipisci provident
				consequuntur cumque quaerat aspernatur. Fugiat quia minus facilis est
				saepe hic illo fugit doloremque autem asperiores reprehenderit sunt
				maiores modi natus ad quas, ab vel nisi, consectetur aspernatur
				officiis, neque eum? Fugit ex ipsum cupiditate excepturi illo molestias
				nostrum, commodi eius dolorem. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Asperiores ex doloremque beatae pariatur cum rem
				magnam vitae nesciunt aliquam dolores sunt dignissimos amet, ab
				provident magni sequi ipsa commodi dicta minima odio illum suscipit quos
				repellat. Obcaecati similique tenetur impedit aliquid porro ducimus
				accusamus maxime eligendi libero nesciunt quod eius, magnam nulla sed
				quia saepe autem adipisci provident consequuntur cumque quaerat
				aspernatur. Fugiat quia minus facilis est saepe hic illo fugit
				doloremque autem asperiores reprehenderit sunt maiores modi natus ad
				quas, ab vel nisi, consectetur aspernatur officiis, neque eum? Fugit ex
				ipsum cupiditate excepturi illo molestias nostrum, commodi eius dolorem.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex
				doloremque beatae pariatur cum rem magnam vitae nesciunt aliquam dolores
				sunt dignissimos amet, ab provident magni sequi ipsa commodi dicta
				minima odio illum suscipit quos repellat. Obcaecati similique tenetur
				impedit aliquid porro ducimus accusamus maxime eligendi libero nesciunt
				quod eius, magnam nulla sed quia saepe autem adipisci provident
				consequuntur cumque quaerat aspernatur. Fugiat quia minus facilis est
				saepe hic illo fugit doloremque autem asperiores reprehenderit sunt
				maiores modi natus ad quas, ab vel nisi, consectetur aspernatur
				officiis, neque eum? Fugit ex ipsum cupiditate excepturi illo molestias
				nostrum, commodi eius dolorem. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Asperiores ex doloremque beatae pariatur cum rem
				magnam vitae nesciunt aliquam dolores sunt dignissimos amet, ab
				provident magni sequi ipsa commodi dicta minima odio illum suscipit quos
				repellat. Obcaecati similique tenetur impedit aliquid porro ducimus
				accusamus maxime eligendi libero nesciunt quod eius, magnam nulla sed
				quia saepe autem adipisci provident consequuntur cumque quaerat
				aspernatur. Fugiat quia minus facilis est saepe hic illo fugit
				doloremque autem asperiores reprehenderit sunt maiores modi natus ad
				quas, ab vel nisi, consectetur aspernatur officiis, neque eum? Fugit ex
				ipsum cupiditate excepturi illo molestias nostrum, commodi eius dolorem.
			</p>
		</div>
	);
};

export default about;
