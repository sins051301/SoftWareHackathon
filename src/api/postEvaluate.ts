import api from ".";
import { InputEvaluateRequest } from "@/types/EvaluateInterface";

async function postEvaluate(message: InputEvaluateRequest) {
  const { data } = await api.post("/ai/evaluation/invoke", message, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}
export default postEvaluate;
