export const fetchComments = async (articleId) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await response.json()
        let comments = data.filter((elem) => elem.postId == articleId)
        return comments
    } catch (error) {
        throw Error(`Couldnt fetch the comments! Error message:${error}`)
    }
}