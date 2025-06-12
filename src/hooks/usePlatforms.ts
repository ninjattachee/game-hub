import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchDatasResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchDatasResponse<Platform>>("platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default usePlatforms;
