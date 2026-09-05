import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

async function getData(endpoint) {
    const res = await axios.get(`${API_URL}/${endpoint}`);
    return res.data;
}

export { getData };