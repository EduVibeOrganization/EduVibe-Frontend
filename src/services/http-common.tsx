import axios from "axios";

const API_URL = "http://localhost:4000/api/v1";

const http = axios.create({
    baseURL: API_URL,
    headers: {'Content-Type': 'application/json'}
});

http.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers
        .Authorization = `Bearer ${token}`;
    }
    return config;
});

export default http;