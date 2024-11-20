import axios, { AxiosError } from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const DEVICE_ID = process.env.EXPO_PUBLIC_X_DEVICE_ID;

interface Headers extends Record<string, string> {
  'X-Device-Id': string;
}

interface Config {
  url: string;
  data?: object;
  headers: Headers;
}

interface Options {
  path: string;
  body?: object;
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

export const encodeUrl = (params: Record<string, string>) => {
  return (
    '?' +
    Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&')
  );
};

const api = {
  get: async (path: string, params?: Record<string, string>) => {
    return api.config('get', {
      path,
      params,
    });
  },

  post: async (path: string, body: object) => {
    return api.config('post', {
      path,
      body,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  // CONFIG
  config: async (method: string, options: Options) => {
    const config: Config = {
      url: API_URL + options.path,
      headers: { 'X-Device-Id': DEVICE_ID },
    };

    if (options.body && method === 'post') config.data = options.body;

    if (options.headers) {
      config.headers = {
        ...config.headers,
        ...options.headers,
      };
    }

    try {
      const response = await axios({ method, ...config });

      return { success: true, data: response?.data };
    } catch (error) {
      return { success: false, error: (error as AxiosError)?.message };
    }
  },
};

export default api;
