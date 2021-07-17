export const fetchUser = async (userId) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        let user = data.filter((elem) => elem.id === userId)
        return user
    } catch (error) {
        throw Error(`Couldnt fetch the user! Error message:${error}`)
    }
}