import { useMutation, useQuery } from "react-query";
import { getList, likeList, unLikeList } from "../../repository/list";

export const useGetListQuery = (date: number) =>
  useQuery(["post/getPost", date], () => getList(date));

export const useLikeListMutation = () => {
  const mutation = useMutation(likeList);
  return mutation;
};

export const useUnLikeListMutation = () => {
  const mutation = useMutation(unLikeList);
  return mutation;
};
