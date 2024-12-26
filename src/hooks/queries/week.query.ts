import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeek } from "@/api/week";
import { SettingInterface } from "@/types/Assignment";
export const useGetWeek = (id: string | undefined) => {
  return useSuspenseQuery<SettingInterface>({
    queryKey: ["week", id],
    queryFn: () => getWeek(id),
  });
};
