import api from ".";

export async function getLeaderBoard(id: string | undefined) {
  if (!id) {
    throw new Error("Invalid user ID");
  }
  const { data } = await api.get(`/api/groups/my?token=${id}`);
  return data;
}
