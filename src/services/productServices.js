import { sendGetRequest } from "../common/service";

/**
  * call get product list api
  * @argument : limit,
  * @returns : response from api
  */
export function getProductList(limit) {
    return new Promise((resolve, reject) => {
        const url = `https://dummyjson.com/products?limit=${limit}&select=id,title,description,price,thumbnail,images`;
        sendGetRequest(url).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
