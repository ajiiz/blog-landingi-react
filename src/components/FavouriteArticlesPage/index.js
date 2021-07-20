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
		<div className={}>
			{
				favouriteArticles.length > 0 ?
					<ArticleShowcase articles={favouriteArticles} title={"Favourite"} />
				:	<span>You dont have any favourite articles</span>
			}
		</div>
		)
}

export default FavouriteArticlesPage