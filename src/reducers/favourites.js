const favouritesReducer =  (favourites = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload
        case "ADD":
            return action.payload
        case "REMOVE":
            return action.payload
        default:
            return favourites
    }
}

export default favouritesReducer