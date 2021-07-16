import React, { useState, useEffect } from 'react'

import { fetchArticles } from '../services/articles'

import ArticlesShowcase from './ArticlesShowcase'
import ArticlesMain from './ArticlesMain'
import styles from "./articles.module.css"

const Articles = () => {

	const [articles, setArticles] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchArticles()
				console.log(data)
			} catch(error) {
				console.log(`Couldnt fetch the posts! Error message:${error}`)
			}
		}
		fetchData()
	}, [])

	return (
		<div className={styles.articles}>
			<ArticlesMain styles={styles} />
			<ArticlesShowcase styles={styles} />
		</div>
	)
}

export default Articles
