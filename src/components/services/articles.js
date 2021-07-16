export const fetchArticles = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        return data
    } catch (error) {
        throw Error(`Couldnt fetch the posts! Error message:${error}`)
    }
}

export const fetchArticle = async (articleId) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        return data.filter((elem) => elem.id === articleId)
    } catch (error) {
        throw Error(`Couldnt fetch the posts! Error message:${error}`)
    }
}