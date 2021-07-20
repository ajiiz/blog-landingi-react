import * as api from "../api"

export const getComments = (articleId) => async (dispatch) => {
    try {
        const data = await api.fetchComments(articleId)
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}