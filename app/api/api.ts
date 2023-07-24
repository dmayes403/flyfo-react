export const sendPostRequest = async (url: string, { args }: { args: { [key: string]: string } }) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(args),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}