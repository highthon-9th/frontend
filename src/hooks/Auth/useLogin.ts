import { FormEvent, useRef } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const onLogin = (e: FormEvent) => {
    e.preventDefault();

    if (idRef.current && pwRef.current) {
      //   postLoginMutation.mutate(
      //     {
      //       id: idRef.current.value,
      //       pw: pwRef.current.value,
      //     },
      //     {
      //       onSuccess: () => {
      //         navigate("/");
      //         window.alert("로그인 성공");
      //       },
      //       onError: () => {},
      //     }
      //   );
    }
  };

  return {
    idRef,
    pwRef,
    onLogin,
  };
};
