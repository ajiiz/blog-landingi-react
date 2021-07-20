import { combineReducers } from "redux"
import articles from "./articles"
import article from "./article"
import comments from "./comments"
import user from "./user"

export default combineReducers({ articles, article, comments, user })