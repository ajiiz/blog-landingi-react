import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { fetchArticle } from "../services/articles"
import { fetchUser } from "../services/users"
import { fetchComments } from "../services/comments"

import ArticleContent from "./ArticleContent"
import ArticleComments from "./ArticleComments"
import styles from "./article.module.css"

const ArticlePage = () => {

	const { id } = useParams()
	const [article, setArticle] = useState({})
	const [comments, setComments] = useState([])
	const [user, setUser] = useState({})

	useEffect(() => {
		let isMounted = true
		const fetchData = async () => {
			try {
				const article = await fetchArticle(id)
				const comments = await fetchComments(id)
				const user = await fetchUser(article.userId)
				if (isMounted) {
					setArticle(article)
					setComments(comments)
					setUser(user)
				}
			} catch(error) {
				console.log(`Couldnt fetch the data in ArticlePage! Error message:${error}`)
			}
		}
		fetchData()
		return () => { isMounted = false }
	}, [])

	return (
		<>
			{
				(user && comments && article) ?
					<div className={styles.article}>
						<ArticleContent article={article} user={user} />
						<ArticleComments comments={comments} />
					</div>
				: null
			}
		</>
	)
}

export default ArticlePage
