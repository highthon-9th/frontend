import { useQuery } from "react-query";
import { getTimeCapsuleById } from "../../repository/time-capsule";

export const useGetTimeCapsuleById = (id: number) =>
  useQuery(["timecapsule/getTimecapsuleById", id], () =>
    getTimeCapsuleById(id)
  );
