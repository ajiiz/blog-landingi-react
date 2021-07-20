import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getArticle } from "../../actions/article"
import { getComments } from "../../actions/comments"
import { getUser } from "../../actions/user"
import { useSelector } from "react-redux"

import ArticleContent from "./ArticleContent"
import ArticleComments from "./ArticleComments"
import styles from "./article.module.css"

const ArticlePage = () => {

	const dispatch = useDispatch()
	const { id } = useParams()
	const article = useSelector((state) => state.article)
	const comments = useSelector((state) => state.comments)
	const user = useSelector((state) => state.user)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
			dispatch(getArticle(id))
			dispatch(getComments(id))
	}, [dispatch])

	useEffect(() => {
		dispatch(getUser(article.userId))
	}, [article])

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
