import React from 'react'

const ArticlesMain = ({ styles }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Articles & News</h1>
			<p className={styles.info}>
				<span className={styles.text}>Create your own content.</span>
				<span className={styles.text}>Look for inspirations and knowledge.</span>
				<span className={styles.text}>Follow your favourites.</span>
			</p>
		</div>
	)
}

export default ArticlesMain
