import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import s from "../../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.logo}>
            <Link href="/">
							<a>
								<Image
									src="/images/Alfa-logo-white.png"
									alt="Logo"
									width={70}
									height={50}
								/>
							</a>
						</Link>
            </div>
            <div className={s.rights}>

            <p>Bütün hüquqlar qorunur 2021</p>
            <h3>CORN</h3>
            </div>
        </div>
    )
}

export default Footer
