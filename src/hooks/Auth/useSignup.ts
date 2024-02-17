import { ChangeEvent, FormEvent, useState } from "react";
import { useSignupMutation } from "../../query/auth/query";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();
  const signupMutation = useSignupMutation();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeSignupData = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitSignupData = () => {
    signupMutation.mutate(signupData, {
      onSuccess: (data) => {
        localStorage.setItem("userId", data);
        navigate("/list");
      },
    });
  };

  return { signupData, onChangeSignupData, onSubmitSignupData };
};
