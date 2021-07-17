import React from 'react'

import styles from "./articles.module.css"

const ArticlesShowcase = ({ articles }) => {
	return (
		<div className={styles.articles__showcase}>
			{
				articles.map((data, key) => {
					return (
						<div className={styles.showcase__article} key={key}>
							<p>{data.title}</p>
						</div>
					)
				})
			}
		</div>
	)
}

export default ArticlesShowcase