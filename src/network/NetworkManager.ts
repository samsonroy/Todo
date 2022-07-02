import axios, {AxiosRequestConfig} from 'axios';
import {store} from '../store';
import {Accept} from './types';

const DEFAULT_TIMEOUT = 60 * 1000;

const appClient = axios.create({
  baseURL: 'https://api-nodejs-todolist.herokuapp.com', // BASE_URL
  timeout: DEFAULT_TIMEOUT,
  headers: {
    Accept: Accept.JSON,
    'Cache-Control': 'no-cache',
  },
});

appClient.interceptors.request.use(config => {
  const accessToken = store.getState().todosList.token;
  if (accessToken) {
    //@ts-ignore
    config.headers.common.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

appClient.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export class NetworkManager {
  static myInstance: NetworkManager;
  isRefreshAPILoading = false;

  static getInstance(): NetworkManager {
    if (!NetworkManager.myInstance) {
      NetworkManager.myInstance = new NetworkManager();
    }

    return NetworkManager.myInstance;
  }

  appRequest = async <T>(options: AxiosRequestConfig) => {
    return this.getData<T>(options);
  };

  getData: <T>(options: AxiosRequestConfig) => Promise<T> = async (
    options: AxiosRequestConfig,
  ) => {
    return appClient(options)
      .then(response => response.data)
      .catch(async error => Promise.reject(error));
  };
}
