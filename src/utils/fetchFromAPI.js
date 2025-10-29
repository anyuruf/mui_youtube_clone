import axios from 'axios';

export const BASE_URL = "https://youtube138.p.rapidapi.com";


const options = {
  baseURL: {BASE_URL},
  params: {
    maxResults: 35,
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
    'x-rapidapi-host': import.meta.env.VITE_APP_RAPID_API_HOST,
  },
  timeout: 10000,
};

export const fetchFromAPI = async (url) => {
  const instance = axios.create({options });
  // Make a request for a user with a given ID
  instance.get(url)
    .then(function (response) {
      // handle success
      console.log("Respose", response.data);
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return [];
    });
};