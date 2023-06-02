// step 5: implement get request
const sendGetRequest = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error);

        return null;
    }
}

export { sendGetRequest };