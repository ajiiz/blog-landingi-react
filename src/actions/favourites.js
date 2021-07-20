import * as api from "../api"

export const getFavourites = () => async (dispatch) => {
    try {
        const data = await api.fetchFavourites()
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const addFavourite = (articleId) => async (dispatch) => {
    try {
        const data = await api.addFavorite(articleId)
        dispatch({ type: "ADD", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const removeFavourite = (articleId) => async (dispatch) => {
    try {
        const data = await api.removeFavourite(articleId)
        dispatch({ type: "REMOVE", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}