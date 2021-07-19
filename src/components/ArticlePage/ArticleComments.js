import React from 'react'

import ArticleComment from "./ArticleComment"

const ArticleComments = ({ comments }) => {
	return (
		<>
		{
			comments.map((data, key) => {
				return (
					<ArticleComment comment={data} key={key} />
				)
			})
		}
		</>
	)
}

export default ArticleComments