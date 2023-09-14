import { sendGetRequest } from "../common/service";

export function getProductList(limit) {
    return new Promise((resolve, reject) => {
        const url = `https://dummyjson.com/products?limit=${limit}&select=id,title,description,price,thumbnail`;
        sendGetRequest(url).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
