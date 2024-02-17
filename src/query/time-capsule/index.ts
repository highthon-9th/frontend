import { useQuery } from "react-query";
import {
  getTimeCapsule,
  getTimeCapsuleById,
} from "../../repository/time-capsule";

export const useGetTimeCapsuleById = (id: number) =>
  useQuery(["timecapsule/getTimecapsuleById", id], () =>
    getTimeCapsuleById(id)
  );

export const useGetTimeCapsule = (userId: number) =>
  useQuery(["timecapsule/getTimecapsule", userId], () =>
    getTimeCapsule(userId)
  );
