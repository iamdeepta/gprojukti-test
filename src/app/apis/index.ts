import { apiBaseUrl } from "../config/env";

//get store list
export const getStores = async (
  pageSize: string = "20",
  page: string = "1"
) => {
  const response = await fetch(
    `${apiBaseUrl}/api/v1.0/store/public/store?page_size=${pageSize}&page=${page}`
  );

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  const data = response.json();

  return data;
};
