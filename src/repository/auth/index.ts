import { instance } from "../../libs/instance";

export interface SignupParam {
  name: string;
  email: string;
  password: string;
}

export interface UserData {
  email: string;
  name: string;
}

export const Signup = async (loginData: SignupParam) => {
  const { data } = await instance.post("/user/signup", loginData);
  return data;
};

export const GetUserData = async (userId: number) => {
  const { data } = await instance.post<UserData>(`/user/${userId}`);
  return data;
};
