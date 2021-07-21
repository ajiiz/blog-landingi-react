import React from "react"

import styles from "./footer.module.css"

const Footer = () => {
	return (
		<div className={styles.footer}>
			<a href="https://github.com/ajiiz" target="_blank" rel="noreferrer" className={styles.footer__text}>
				© 2021 ajiiz.piotrwrobel
      </a>
		</div>
	)
}

export default Footer
