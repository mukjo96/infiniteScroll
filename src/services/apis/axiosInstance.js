import axios from 'axios';
import { BASE_URL } from '../../constants/commentAPI.js';

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});
