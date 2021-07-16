import React, { useState, useEffect } from 'react'

import { fetchArticles } from '../services/articles'

import ArticlesShowcase from './ArticlesShowcase'
import ArticlesMain from './ArticlesMain'
import styles from "./articles.module.css"

const Articles = () => {

	const [articles, setArticles] = useState({})

	useEffect(() => {
		let isMounted = true;
		const fetchData = async () => {
			try {
				const data = await fetchArticles()
				if (isMounted) {
					setArticles(data)
				}
				console.log(data.slice(0,10))
			} catch(error) {
				console.log(`Couldnt fetch the posts! Error message:${error}`)
			}
		}
		fetchData()
		return () => { isMounted = false }
	}, [])

	return (
		<div className={styles.articles}>
			<ArticlesMain styles={styles} />
			<ArticlesShowcase styles={styles} data={articles}/>
		</div>
	)
}

export default Articles
