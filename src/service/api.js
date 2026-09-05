import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

async function getData() {
    const res = await axios.get(`${API_URL}/products`);
    return res.data;
}
async function getCategory() {
    const res = await axios.get(`${API_URL}/category`);
    return res.data;
}
async function getFeatures() {
    const res = await axios.get(`${API_URL}/features`);
    return res.data;
}
async function getGenres() {
    const res = await axios.get(`${API_URL}/genres`);
    return res.data;
}
async function getFooter() {
    const res = await axios.get(`${API_URL}/footer`);
    return res.data;
}

export { getData, getCategory, getFeatures, getGenres, getFooter };