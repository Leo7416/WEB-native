import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.234.96:8000/' });