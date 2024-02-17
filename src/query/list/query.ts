import { useQuery } from "react-query";
import { getList } from "../../repository/list";

export const useGetListQuery = (date: number) =>
  useQuery(["post/getPost", date], () => getList(date));
