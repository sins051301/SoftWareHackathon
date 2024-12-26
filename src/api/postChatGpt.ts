import api from ".";
import { InputEvaluateRequest } from "@/types/EvaluateInterface";

async function postChatGpt(message: InputEvaluateRequest) {
  const { data } = await api.post("/chat/invoke", message, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}
export default postChatGpt;
