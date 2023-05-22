import { baseAxios } from "@/utils/axios";

export const getPostSearch = (pageNumber: string) =>
  baseAxios.get(`v1/search?query=${pageNumber}`);
