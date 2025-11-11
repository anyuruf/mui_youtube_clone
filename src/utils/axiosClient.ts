import axios, {type AxiosError, type AxiosResponse} from 'axios';

export const BASE_URL = "https://youtube-data8.p.rapidapi.com";

const options = {
    params: {
        maxResults: 35,
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_APP_RAPID_API_HOST,
    },
};

const apiClient  = axios.create(options);

apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        return response.data;
    },
    (err: AxiosError) => {
        // handle error
        console.log(err);
    }
);

export const getVideos = async (queryString: string ) : Promise<any> => {
    const url = `${BASE_URL}/search?part=snippet&q=${queryString}&hl=en&gl=US`;
    return await apiClient.get(url);
}

export const getChannel = (id : string) =>
    apiClient.get(`channels?part=snippet&id=${id}`);

export const getPlaylist = (id : string) =>
    apiClient.get(`playlistItems?part=snippet&playlistId=${id}`);
