import { useMutation } from "react-query";
import { Signup } from "../../repository/auth";

export const useSignupMutation = () => {
  const mutation = useMutation(Signup);
  return mutation;
};
