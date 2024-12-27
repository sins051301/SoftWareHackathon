import api from ".";

export async function getWeekPersonal(id: string | undefined) {
  if (id === undefined) {
    alert("주차 ID가 제공되지 않았습니다.");
    throw new Error("주차 ID가 제공되지 않았습니다.");
  }

  try {
    const { data } = await api.get(`/api/groups/week/spec?weekId=${id}`);
    return data;
  } catch (error: any) {
    console.error(
      "주차 데이터를 가져오는 중 오류가 발생했습니다:",
      error.message
    );
    throw new Error("주차 데이터를 가져오는 데 실패했습니다.");
  }
}
