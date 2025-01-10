import axios from "axios";

const API_URL = "http://localhost:4000";

const http = axios.create({
    baseURL: API_URL,
    headers: {'Content-Type': 'application/json'}
});

export default http;