"use client";
import { getAPIData } from "@/utils/getAPI";
import { useInfiniteQuery } from "@tanstack/react-query";
import List from "./List";

const SongLists = () => {
  const loadDataNumber = 20;
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["chartData"],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await getAPIData(pageParam, loadDataNumber);
      if (!response || !response.data) {
        throw new Error("Invalid response data");
      }
      return response;
    },
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const nextOffset = lastPageParam + loadDataNumber;
      return nextOffset < lastPage.data.total ? nextOffset : undefined;
    },
    initialPageParam: 0,
    select: (data) => {
      const newData = data.pages.flatMap((page) => page.data.data);
      return newData;
    },
  });

  return (
    <ul className="song-list">
      {data?.map(
        (
          {
            title,
            rank,
            artist,
          }: {
            title: string;
            rank: number;
            artist: string;
          },
          index: number
        ) => {
          const isLast = index + 1 === data.length;
          return (
            <List
              key={title}
              rank={rank}
              title={title}
              artist={artist}
              className={isLast ? "last" : ""}
              fetchNextPage={fetchNextPage}
            />
          );
        }
      )}
    </ul>
  );
};

export default SongLists;
