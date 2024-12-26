import { useSuspenseQuery } from "@tanstack/react-query";
import { getLeaderBoard } from "@/api/leaderBoard";
import { LeaderBoard } from "@/types/LeaderBoard";
export const useGetLeaderBoard = (id: string | undefined) => {
  return useSuspenseQuery<LeaderBoard[]>({
    queryKey: ["groupsMy"],
    queryFn: () => getLeaderBoard(id),
  });
};
