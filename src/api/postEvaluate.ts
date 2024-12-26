import { InputChatRequest } from "@/types/ChatInterface";
import api from ".";

async function postEvaluate(message: InputChatRequest) {
  const { data } = await api.post("/evaluation/invoke", message, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}
export default postEvaluate;
