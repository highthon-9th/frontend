import { useMutation, useQuery } from "react-query";
import { GetUserData, Signup } from "../../repository/auth";

export const useSignupMutation = () => {
  const mutation = useMutation(Signup);
  return mutation;
};

export const useGetUserDataQuery = (userId: number) =>
  useQuery(["userData/getUserData", userId], () => GetUserData(userId));
