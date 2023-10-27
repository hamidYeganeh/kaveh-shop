export const generateQueryParamsObjForList = (
  filters: Record<string, any>
): string => {
  let queryParams = "";

  Object.keys(filters).forEach((key) => {
    if (filters[key]) {
      queryParams += `${key}=${filters[key]}&`;
    }
  });

  // Remove the trailing '&' character
  queryParams = queryParams.slice(0, -1);

  return `?${queryParams}`;
};
