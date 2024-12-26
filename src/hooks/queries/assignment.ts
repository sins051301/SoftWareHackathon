import { queryClient } from "@/services/TanstackQueryStore";
import {useMutation, useSuspenseQuery} from '@tanstack/react-query';
import { SettingInterface } from "@/types/Assignment";
import postAssignment, {getAssignmentList} from '@/api/assignment';

export const useGetWeek = (groupId: number) => {
  return useSuspenseQuery<SettingInterface[]>({
    queryKey: ["groups", groupId],
    queryFn: () => getAssignmentList(groupId),
  });
};

export const usePostAssignment = () => {
  return useMutation({
    mutationFn: (data: SettingInterface) => postAssignment(data),
    onError: (error) => {
      alert(error?.message);
    },
    onSuccess: () => {
      console.log("User information posted successfully!");
      queryClient.invalidateQueries({ queryKey: ["groups"] });
    },
  });
};
