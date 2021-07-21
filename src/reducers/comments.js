const commentsReducer =  (comments = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload
        case "ADD":
            return [...comments, action.payload]
        default:
            return comments
    }
}

export default commentsReducer