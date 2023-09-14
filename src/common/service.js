/**
  * call get Api request
  * @argument : url,
  * @returns : response from api
  */
export function sendGetRequest(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}
