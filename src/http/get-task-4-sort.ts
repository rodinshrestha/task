import { POPULAR } from "@/constants/sort-constant";
import { baseAxios } from "@/utils/axios";

export const getPostSort = (key: string) => {
  const URL =
    key === POPULAR ? "search?tags=front_page" : "search_by_date?tags=story";
  return baseAxios.get(`v1/${URL}`);
};
