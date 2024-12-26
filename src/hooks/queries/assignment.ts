import { queryClient } from "@/services/TanstackQueryStore";
import { useMutation } from "@tanstack/react-query";
import { SettingInterface } from "@/types/Assignment";
import postAssignment from "@/api/assignment";

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
