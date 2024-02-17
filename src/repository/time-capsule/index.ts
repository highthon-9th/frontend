import { instance } from "../../libs/instance";
import { TimeCapsule } from "../../types/time-capsule/types";

export const getTimeCapsuleById = async (id: number) => {
  const { data } = await instance.get<TimeCapsule>(`/time-capsule/${id}`);
  return data;
};
