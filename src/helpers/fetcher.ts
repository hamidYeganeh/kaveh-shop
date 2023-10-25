import { BASE_URL } from "@/config";

export const fetcher: (
  url: string,
  fetchConfig?: RequestInit
) => Promise<Response> = async (url, fetchConfig) => {
  return await fetch(`${BASE_URL}${url}`, { ...fetchConfig })
    .then((res) => res)
    .catch((err) => err);
};
