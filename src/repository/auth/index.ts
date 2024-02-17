import { instance } from "../../libs/instance";

export interface SignupParam {
  name: string;
  email: string;
  password: string;
}

export const Signup = async (loginData: SignupParam) => {
  const { data } = await instance.post("/user/signup", loginData);
  return data;
};
