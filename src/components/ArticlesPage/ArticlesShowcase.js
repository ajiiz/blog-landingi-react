import React from 'react'

const ArticlesShowcase = ({ styles, articles }) => {
	return (
		<>
			{
				articles.map((data, key) => {
					return (
						<div className={styles.article} key={key}>
							<p>{data.title}</p>
						</div>
					)
				})
			}
		</>
	)
}

export default ArticlesShowcase