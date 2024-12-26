import { useSuspenseQuery } from "@tanstack/react-query";
import { getGroupList, getGroupListById } from "@/api/groupAPI";
import { GroupResponse, GroupInfoByIdResponse } from "@/types/GroupInterface";

export const useGetGroupList = () => {
  return useSuspenseQuery<GroupResponse[]>({
    queryKey: ["groups"],
    queryFn: () => getGroupList(),
  });
};

export const useGetGroupListById = (id: string | null) => {
  
  return useSuspenseQuery<GroupInfoByIdResponse[]>({
    queryKey: ["groups", id],
    queryFn: () => getGroupListById(id),
  });
};
