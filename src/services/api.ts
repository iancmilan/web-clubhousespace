import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-clubhousespace.herokuapp.com'
});

export default api;