import React, { useEffect } from 'react'

import { fetchArticles } from '../services/articles'

const Articles = () => {

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
		<div>
				Articles! Articles! Articles!
		</div>
	)
}

export default Articles
