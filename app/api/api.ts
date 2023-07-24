export const sendPostRequest = async (url: string, { arg }: { arg: { [key: string]: string } }) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(arg),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}