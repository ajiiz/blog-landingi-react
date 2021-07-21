import React, { useState } from 'react'

import styles from "./article.module.css"

const CommentForm = () => {

	const [userComment, setUserComment] = useState({name: "", content: ""})

	const handleChange = (event) => {
		const { name, value } = event.target
		setUserComment({...userComment, [name]: value })
	}

	const handleSubmit = () => {

	}

	return (
		<>
			<h3 className={styles.comment__header}>Add comment</h3>
			<form className={styles.comment__form} onSubmit={handleSubmit}>
        <label>
          <div className={styles.form__text}>Name</div>
          <input
						className={styles.form__name}
						type="text"
						placeholder="your name"
						name="name"
						value={userComment.name}
						onChange={handleChange}
					/>
        </label>
				<label>
					<div className={styles.form__text}>Comment</div>
          <textarea
						className={styles.form__comment}
						placeholder="your comment"
						name="content"
						value={userComment.content}
						onChange={handleChange}
					/>
        </label>
        <input type="submit" value="send" />
      </form>
		</>
	)
}

export default CommentForm
