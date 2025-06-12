import axios from "axios";

export interface FetchDatasResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b88b87089b6b4299a56242ed8cab87d8",
  },
});
