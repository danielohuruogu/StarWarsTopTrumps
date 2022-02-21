import fetch from "unfetch";

const checkStatus = response => {
    if (response.ok) {
        return response
    }
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}




export const getAllCharacters = () => 

    fetch("https://swapi.dev/api/people/")
        .then(checkStatus);
    // console.log(response)
    // var data = JSON.stringify(response, null, 2)

    // allCharacters = allCharacters + data.results
    // console.log(data)
    // console.log(allCharacters)

    // while (data.next != null) {
    //     console.log("grabbing data...")
    //     response = fetch(data.next)
    //     var data = JSON.stringify(response, null, 2)
    //     allCharacters = allCharacters + data.results
    // }
    // console.log("All characters have been collected")

    // return allCharacters

    // .then((result) => {
    //     console.log(result);
    //     return result.nextPage();
    // })
    // .then((result) => {
    //     console.log(result);
    //     return result.previousPage();
    // }).then((result)=> {
    //     console.log(result);
    // })
    // .catch((err)=> {
    //     console.log(err);
    // })