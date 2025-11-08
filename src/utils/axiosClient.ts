import axios, {type AxiosError, type AxiosResponse} from 'axios';

export const BASE_URL = "https://www.youtube-data8.p.rapidapi.com/";

/**
 * Custom API error with metadata for React Router loaders/actions.
 */

class APIError extends Error {
    statusCode: number;
    stack?: string | undefined;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, APIError);
        }
    }
}

export default APIError;





const options = {
    baseUrl: {BASE_URL},
    params: {
        maxResults: 35,
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_APP_RAPID_API_HOST,
    },
};

export const fetchFromAPI = async (url: string): Promise<unknown> => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

// Source - https://stackoverflow.com/a/69854932
// Posted by Humoyun Ahmad
// Retrieved 2025-11-07, License - CC BY-SA 4.0
const apiClient  = axios.create(options);

apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        return response.data;
    },
    (err: AxiosError) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        const status = err.response?.status || 500;
        // we can handle global errors here
        switch (status) {
            // authentication (token related issues)
            case 401: {
                return Promise.reject(new APIError(err.message, 409));
            }

            // forbidden (permission related issues)
            case 403: {
                return Promise.reject(new APIError(err.message, 409));
            }

            // bad request
            case 400: {
                return Promise.reject(new APIError(err.message, 400));
            }

            // not found
            case 404: {
                return Promise.reject(new APIError(err.message, 404));
            }

            // conflict
            case 409: {
                return Promise.reject(new APIError(err.message, 409));
            }

            // unprocessable
            case 422: {
                return Promise.reject(new APIError(err.message, 422));
            }

            // generic api error (server related) unexpected
            default: {
                return Promise.reject(new APIError(err.message, 500));
            }
        }
    }
);




export const getVideos = (selectedCategory = "Advanced Spring Boot Developer" ) : Promise<any> =>
    apiClient.get(`search?part=snippet&q=${selectedCategory}&hl=en&gl=US`);

export const getChannel = (id : string) =>
    apiClient.get(`channels?part=snippet&id=${id}`);

export const getPlaylist = (id : string) =>
    apiClient.get(`playlistItems?part=snippet&playlistId=${id}`);
