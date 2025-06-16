import axios, { AxiosRequestConfig } from "axios";

export interface FetchDatasResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b7b63030abec43a4b053aa1d8f957643",
  },
});

class APIClient<T> {
  constructor(private endpoint: string) {}

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchDatasResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
