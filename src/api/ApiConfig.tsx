import axios from 'axios';
import {useState} from 'react';

interface AxiosConfig {
  baseURL: string;
  headers?: {
    [key: string]: string;
  };
  timeout?: number;
}
type AxiosInstance = ReturnType<typeof axios.create>;

const createAxiosInstance = (config: AxiosConfig): AxiosInstance => {
  return axios.create({
    ...config,
    timeout: config.timeout,
  });
};

const useAxios = () => {
  const [axiosInstance, setAxiosInstance] = useState<AxiosInstance | null>(
    null,
  );

  const initAxios = (config: AxiosConfig) => {
    setAxiosInstance(createAxiosInstance(config));
  };

  const setHeaders = (headers: {[key: string]: string}) => {
    if (axiosInstance) {
      axiosInstance.defaults.headers = {
        ...axiosInstance.defaults.headers,
        ...headers,
      };
    }
  };

  return {
    axiosInstance,
    initAxios,
    setHeaders,
  };
};

export default useAxios;
