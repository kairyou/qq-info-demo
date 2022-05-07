import { useState, EffectCallback } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// Usage:
// const { fetch, loading, data, error } = useFetch(url, config);

interface Options {
  getError?: Function; // get Error from Response
}

const instance = axios.create({
  timeout: 10000,
  // withCredentials: true,
});
const { CancelToken } = axios;

/**
 *  fetch data from api
 * @param url api url
 * @param config axios request config
 * @param options request options
 * @returns
 */
const useFetch = (
  url: string,
  config: Partial<AxiosRequestConfig>,
  options: Options = {}
): {
  loading: boolean;
  data: any;
  error: string | null;
  fetch: EffectCallback;
  cancel: () => void;
} => {
  const { getError = () => '' } = options ?? {};
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const source = CancelToken.source();
  const cancel = () => {
    if (source) source.cancel();
  };

  const fetch: EffectCallback = () => {
    if (!url) return;
    const fetchData = async (): Promise<void> => {
      setData(null);
      setError('');
      setLoading(true);
      await instance
        .request({
          url,
          ...config,
          cancelToken: source.token,
        })
        .then((res: AxiosResponse) => {
          const err = getError(res.data);
          if (err) setError(err);
          else setData(res.data);
        })
        .catch((err: AxiosError) => {
          // console.warn('error', err.message, err.response?.data)
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  };
  // useEffect(fetch, [url, config, source.token]);

  return { fetch, loading, data, error, cancel };
};

export default useFetch;
