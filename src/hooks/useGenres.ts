import { useQuery } from "@tanstack/react-query";

import apiClient from "../services/api-client";
import { FetchDatasResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchDatasResponse<Genre>>("genres")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useGenres;
