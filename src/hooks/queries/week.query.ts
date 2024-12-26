import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeek } from "@/api/week";
import { WeekGetInterface } from "@/types/Week";
export const useGetWeek = (id: string | undefined) => {
  return useSuspenseQuery<WeekGetInterface[]>({
    queryKey: ["week", id],
    queryFn: () => getWeek(id),
  });
};
