import { instance } from "../../libs/instance";
import { Post } from "../../types/list/types";

export const getList = async (date: number) => {
  const { data } = await instance.get<Post[]>(`/post?generation=${date}`);
  return data;
};
