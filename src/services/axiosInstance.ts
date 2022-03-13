import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${process.env.NEXTAUTH_SECRET}`,
  },
});
