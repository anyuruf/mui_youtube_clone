import axios from 'axios';

export const BASE_URL = "https://youtube-data8.p.rapidapi.com";


const options = {
  baseURL: {BASE_URL},
  params: {
    maxResults: 35
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
    'x-rapidapi-host': import.meta.env.VITE_APP_RAPID_API_HOST,
  },
  timeout: 10000,
};

export const axiosInstance = axios.create({options });

export async function fetchFromAPI(url) {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};