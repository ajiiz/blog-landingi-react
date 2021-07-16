import React, { useState, useEffect } from 'react'

import { fetchArticles } from '../services/articles'

import ArticlesShowcase from './ArticlesShowcase'
import ArticlesMain from './ArticlesMain'
import styles from "./articles.module.css"

const ArticlesPage = () => {

	const [allArticles, setAllArticles] = useState([])
	const [page, setPage] = useState(0)

	useEffect(() => {
		let isMounted = true
		const fetchData = async () => {
			try {
				const data = await fetchArticles(page)
				if (isMounted) {
					setAllArticles(data)
				}
			} catch(error) {
				console.log(`Couldnt fetch the posts! Error message:${error}`)
			}
		}
		fetchData()
		return () => { isMounted = false }
	}, [allArticles])

	return (
		<div className={styles.articles}>
			<ArticlesMain styles={styles} />
			<ArticlesShowcase styles={styles} articles={allArticles}/>
		</div>
	)
}

export default ArticlesPage
