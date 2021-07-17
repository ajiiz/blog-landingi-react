import React from 'react'

import styles from "./article.module.css"
import stylesMainArticle from "../ArticlesPage/articles.module.css"
import photo from "../../assets/article-photo.jpg"

const ArticleContent = ({ article, user, comments }) => {
	return (
		<div className={styles.article}>
			<div className={stylesMainArticle.articles__mainarticle}>
				<img src={photo} className={stylesMainArticle.mainarticle__photo} />
				<div className={stylesMainArticle.mainarticle__content}>
					<h3 className={styles.article__title}>{article.title}</h3>
					<p className={styles.article__text}>
						{article.body}
					</p>
					<p className={styles.article__author}>
						<span>author</span>
						<span>{user.name}</span>
						<span>{user.email}</span>
					</p>
				</div>
			</div>
				<div className={styles.article__comments}>

				</div>
		</div>
	)
}

export default ArticleContent
