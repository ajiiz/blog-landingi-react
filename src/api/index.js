export const fetchArticles = async (page) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        let start = page * 8
        let end = start + 8
        data = data.filter((elem) => elem.id > start && elem.id <= end)
        return data
    } catch (error) {
        throw Error(`Couldnt fetch the posts! Error message:${error}`)
    }
}