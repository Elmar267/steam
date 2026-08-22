import axios from "axios";

async function getData() {
    const res = await axios.get("https://steam-data-two.vercel.app/api/products")
    return res.data
}

async function getCategory() {
    const res = await axios.get("https://steam-data-two.vercel.app/api/category")
    return res.data
}

async function getFeatures() {
    const res = await axios.get("https://steam-data-two.vercel.app/api/features")
    return res.data
}

export {getData, getCategory, getFeatures};