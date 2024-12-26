import postChatGpt from "@/api/postChatGpt";
import { queryClient } from "@/services/TanstackQueryStore";
import { InputEvaluateRequest } from "@/types/EvaluateInterface";
import { useMutation } from "@tanstack/react-query";

export function usePostEvaluate() {
  return useMutation({
    mutationKey: ["chat"],
    mutationFn: (data: InputEvaluateRequest) => postChatGpt(data),
    onError: (error) => {
      alert(error?.message);
    },
    onSuccess: () => {
      console.log("User information posted successfully!");
      queryClient.invalidateQueries({ queryKey: ["chat"] });
    },
  });
}
