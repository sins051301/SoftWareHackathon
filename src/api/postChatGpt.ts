import { ChatRequest } from "@/types/ChatInterface";
import api from ".";

async function postChatGpt(message: ChatRequest) {
  const { data } = await api.post("/api/chatGpt/prompt", message, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}
export default postChatGpt;
