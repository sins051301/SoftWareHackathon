import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import {
  getGroupList,
  getGroupListById,
  createGroup,
  getGroupMyList,
} from "@/api/groupAPI";
import {
  GroupResponse,
  GroupInfoByIdResponse,
  GroupPostInterface,
} from "@/types/GroupInterface";
import { queryClient } from "@/services/TanstackQueryStore";

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

export const usePostGroup = () => {
  return useMutation({
    mutationFn: (data: GroupPostInterface) => createGroup(data),
    onError: (error) => {
      alert(error?.message);
    },
    onSuccess: () => {
      console.log("User information posted successfully!");
      queryClient.invalidateQueries({ queryKey: ["groups"] });
    },
  });
};

export const useGetMyGroupList = (id: string | null) => {
  return useSuspenseQuery<GroupResponse[]>({
    queryKey: ["groupsMy"],
    queryFn: () => getGroupMyList(id),
  });
};
