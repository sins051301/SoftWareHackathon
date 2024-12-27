import { useSuspenseQuery } from "@tanstack/react-query";
import { SettingInterface } from "@/types/Assignment";
import { getWeekPersonal } from "@/api/week";
export const useGetWeekPersonal = (id: string | undefined) => {
  return useSuspenseQuery<SettingInterface>({
    queryKey: ["week", id],
    queryFn: () => getWeekPersonal(id),
  });
};
