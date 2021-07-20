import React, { useEffect } from 'react'

const FavouriteArticlesPage = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div>
			Favourite Articles
		</div>
	)
}

export default FavouriteArticlesPage