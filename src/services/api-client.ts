import axios, { AxiosRequestConfig } from "axios";

export interface FetchDatasResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b88b87089b6b4299a56242ed8cab87d8",
  },
});

class APIClient<T> {
  constructor(private endpoint: string) {}

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchDatasResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
