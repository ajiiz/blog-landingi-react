import React, { useState, useEffect } from 'react'

import { fetchArticles } from '../services/articles'

import ArticlesShowcase from './ArticlesShowcase'
import ArticlesMain from './ArticlesMain'
import ArticlesButtons from './ArticlesButtons'
import styles from "./articles.module.css"

const ArticlesPage = () => {

	const [allArticles, setAllArticles] = useState([])
	const [page, setPage] = useState(0)
	const [lastPage, setLastPage] = useState(false)

	useEffect(() => {
		let isMounted = true
		const fetchData = async () => {
			try {
				const data = await fetchArticles(page)
				if (isMounted) {
					data.length < 8 ? setLastPage(true) : setLastPage(false)
					setAllArticles(data)
				}
			} catch(error) {
				console.log(`Couldnt fetch the posts! Error message:${error}`)
			}
		}
		fetchData()
		return () => { isMounted = false }
	}, [page])

	const handlePage = (op) => {
		if (op === "inc" && !lastPage) {
			setPage(page + 1)
		} else if (op == "dec" && page - 1 >= 0) {
			setPage(page - 1)
		}
	}

	return (
		<div className={styles.articles}>
			<ArticlesMain />
			<ArticlesShowcase articles={allArticles}/>
			<ArticlesButtons handlePage={handlePage} />
		</div>
	)
}

export default ArticlesPage
