import axios from "axios";



export default function ProductActions() {


    let headers = {};
    const baseURL = process.env.REACT_APP_GET_URL;
    const API = axios.create({
        baseURL: baseURL,
        headers
    });


    async function getProducts() {
        console.log("GET ALL FIREDDD")
        const response = await API.get("/products")
        let data = response.data
        return data;
    }


    async function getProductItem(id) {
        const response = await API.get(`/products/${id}`)
        let data = response.data
        console.log("data", data)
        return data;
    }

    async function getCategories(category) {
        console.log("FIREDDDDDDDD")
        const response = await API.get(`/products/category/${category}`)
        let data = response.data
        console.log("data", data)
        return data;
    }
    return {
        getProducts,
        getProductItem,
        getCategories
    }
}