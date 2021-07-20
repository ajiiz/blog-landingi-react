import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { getFavouriteArticles } from "../../actions/favourites"
import { useSelector } from "react-redux"
import ArticleShowcase from "../ArticlesPage/ArticlesShowcase"

const FavouriteArticlesPage = () => {

	const favouriteArticles = useSelector((state) => state.favourites)

	const dispatch = useDispatch()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		dispatch(getFavouriteArticles())
	}, [dispatch])

	return (
		<>
			{
				favouriteArticles.length > 0 ?
					<ArticleShowcase articles={favouriteArticles} />
				:	<h3>You dont have any favourites</h3>
			}
		</>
		)
}

export default FavouriteArticlesPage