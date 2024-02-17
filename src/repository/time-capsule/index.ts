import { instance } from "../../libs/instance";
import { TimeCapsule, TimeCapsules } from "../../types/time-capsule/types";

export const getTimeCapsuleById = async (id: number) => {
  const { data } = await instance.get<TimeCapsule>(`/time-capsule/${id}`);
  return data;
};

export const getTimeCapsule = async (userId: number) => {
  const { data } = await instance.get<TimeCapsules[]>(
    `/time-capsule/${userId}`
  );
  return data;
};
