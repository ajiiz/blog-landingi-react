import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { fetchArticle } from "../services/articles"
import { fetchUser } from "../services/users"
import { fetchComments } from "../services/comments"

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
				const user = await fetchUser(id)
				if (isMounted) {
					//console.log(article)
					//console.log(comments)
					//console.log(user)
					setArticle(article)
					setComments(comments)
					setUser(user)
				}
			} catch(error) {
				console.log(`Couldnt fetch the posts! Error message:${error}`)
			}
		}
		fetchData()
		return () => { isMounted = false }
	}, [])

	return (
		<div className={styles.article}>
			{
				article.length > 0 &&
					<p>{article.body}</p>
			}
		</div>
	)
}

export default ArticlePage
