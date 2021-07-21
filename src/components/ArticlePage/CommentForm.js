import React, { useState, useEffect } from 'react'

import styles from "./article.module.css"

const CommentForm = () => {
	return (
		<>
			<h3 className={styles.comment__header}>Add comment</h3>
			<form className={styles.comment__form}>
        <label>
          <div className={styles.form__text}>Name</div>
          <input className={styles.form__name} type="text" placeholder="your name"/>
        </label>
				<label>
					<div className={styles.form__text}>Comment</div>
          <textarea className={styles.form__comment} placeholder="your comment"/>
        </label>
        <input type="submit" value="send" />
      </form>
		</>
	)
}

export default CommentForm
