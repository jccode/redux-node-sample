
import fetch from 'node-fetch';

const PAGE_SIZE = 10;

const get = async (url, options = {}) => {
    const response = await fetch(url, options);
    if(response.status == 203) {
        console.log("You haven't login yet. Please login first!")
        return Promise.reject("Not login.");
    }
    else {
        return response.json();
    }
};

export default {
    products: pageNum => get(`http://test.dianjinhe.com/api/finance/product/getList?pageNum=${pageNum}&pageSize=${PAGE_SIZE}`),
    gist: () => get("https://api.github.com/gists/public")
}