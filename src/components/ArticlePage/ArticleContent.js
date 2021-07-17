import React from 'react'

import styles from "./article.module.css"

const ArticleContent = ({ article, user, comments }) => {
	return (
		<div className={styles.article}>
				<p>{article.body}</p>
		</div>
	)
}

export default ArticleContent
