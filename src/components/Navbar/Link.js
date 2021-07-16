import React from 'react'
import { NavLink } from "react-router-dom"

import styles from "./navbar.module.css"

const Link = ({ name, path }) => (
	<li className={styles.item}><NavLink className={styles.link} to={path}>{name}</NavLink></li>
)

export default Link
