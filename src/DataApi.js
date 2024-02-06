export const DataApi = (apiUrl) => {
    return fetch(apiUrl)
    .then((response) => {
        if(!response.ok){
            throw new Error(`Error! ${response.status}`)
        }
        return response.json();
    })
    .catch((error) => {
        console.log("Error getting data: ", error);
        return null;
    })
    
}