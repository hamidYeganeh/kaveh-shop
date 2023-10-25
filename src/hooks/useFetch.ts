"use client";

import { client } from "@/helpers";
import { AxiosError, AxiosInterceptorOptions, AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

interface IUseFetch {
  url: string;
  options?: AxiosRequestConfig;
}
export const useFetch = async (
  url: IUseFetch["url"],
  options: IUseFetch["options"]
): Promise<any> => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  //   useCallback(async () => {
  const fetch = useMemo(async () => {
    setIsLoading(true);
    try {
      const response = await client(url, {
        ...options,
      });
      setData(response.data);
      //   return response.data;
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [url, options]);
  //   }, [url]);

  return { data, isLoading, error };
};
