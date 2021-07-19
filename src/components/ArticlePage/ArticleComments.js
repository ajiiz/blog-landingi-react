import React from 'react'

import ArticleComment from "./ArticleComment"
import styles from "./article.module.css"

const ArticleComments = ({ comments }) => {
	return (
		<div className={styles.comment__container}>
			<h3 className={styles.comment__header}>Comment Section</h3>
			{
				comments.map((data, key) => {
					return (
						<ArticleComment comment={data} key={key} />
					)
				})
			}
		</div>
	)
}

export default ArticleComments