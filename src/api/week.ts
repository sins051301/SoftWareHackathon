import api from ".";

export async function getWeek(id: string | undefined) {
  if (!id) {
    throw new Error("Invalid user ID");
  }
  const { data } = await api.get(`/api/groups/week/spec?weekId=${id}`);
  return data;
}
