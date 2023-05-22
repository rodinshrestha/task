import { baseAxios } from "@/utils/axios";

export const getTaskPagination = (pageNumber: number) =>
  baseAxios.get(`v1/search?tags=front_page&page=${pageNumber}`);
