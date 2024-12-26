import api from ".";
import { InputChatRequest } from "@/types/ChatInterface";

async function postChatGpt(message: InputChatRequest) {
  const { data } = await api.post("/chat/invoke", message, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}
export default postChatGpt;
