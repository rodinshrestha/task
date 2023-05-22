import { baseAxios } from "@/utils/axios";

export const getPost = () => baseAxios.get("/v1/search?tags=front_page");
