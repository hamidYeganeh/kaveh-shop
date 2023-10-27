import { BASE_URL } from "@/config";
import { generateQueryParamsObjForList } from "@/utils";

export const fetcher: (
  url: string,
  params?: any,
  fetchConfig?: RequestInit
) => Promise<Response> = async (url, params, fetchConfig) => {
  const qp = params ? generateQueryParamsObjForList(params) : "";

  return await fetch(`${BASE_URL}${url}${qp}`, { ...fetchConfig })
    .then((res) => res)
    .catch((err) => err);
};
