import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const commonAPI = async (
  httpRequest: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  reqBody?: any,
  reqHeader?: Record<string, string>
): Promise<AxiosResponse<any>> => {
  const reqConfig: AxiosRequestConfig = {
    method: httpRequest,
    url,
    data: reqBody,
    headers: reqHeader ? reqHeader : { "Content-Type": "application/json" },
  };

  try {
    const result = await axios(reqConfig);
    return result;
  } catch (err) {
    return Promise.reject(err);
  }
};
