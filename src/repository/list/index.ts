import { instance } from "../../libs/instance";
import { Post } from "../../types/list/types";

export const getList = async (date: number) => {
  const { data } = await instance.get<Post[]>(`/post?generation=${date}`);
  return data;
};

export const likeList = async (id: number) => {
  await instance.post(`/post/${id}/like`);
};

export const unLikeList = async (id: number) => {
  await instance.delete(`/post/${id}/like`);
};
