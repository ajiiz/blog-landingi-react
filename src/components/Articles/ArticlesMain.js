import React from 'react'

import photo from "../../assets/header-photo.jpg"

const ArticlesMain = ({ styles }) => {
	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.header}>Articles & News</h1>
				<p className={styles.info}>
					<span>Create your own content.</span>
					<span>Look for inspirations and knowledge.</span>
					<span>Follow your favourites.</span>
				</p>
			</div>
			<div className={styles.mainarticle}>
				<img src={photo} className={styles.photo} />
				<div className={styles.content}>
					<h3 className={styles.title}>There might be <span>Your</span> title</h3>
					<p className={styles.text}>
						<span>There would go your content...</span>
						<span>There would go your content...</span>
						<span>There would go your content...</span>
					</p>
				</div>
			</div>
		</>
	)
}

export default ArticlesMain
