import api from ".";
import { SettingInterface } from "@/types/Assignment";

async function postAssignment(assignment: SettingInterface) {
  const { data } = await api.post("/api/groups/week", assignment, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}
export default postAssignment;
