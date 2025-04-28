"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import React, { useState } from "react";

const List = ({
  rank,
  title,
  artist,
  className,
  fetchNextPage,
}: {
  rank: number;
  title: string;
  artist: string;
  className: string;
  fetchNextPage: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  useIntersectionObserver(
    ".last",
    () => {
      if (className === "last" && rank !== 100) {
        setIsLoading(true);
        setTimeout(fetchNextPage, 1000);
      }
    },
    () => setIsLoading(false)
  );

  return (
    <li className={`contents__list ${className}`}>
      <div className="contents__item">
        <p className="contents__item-rank">{rank} . </p>
        <img className="contents__item-thumb" />
        <p className="contents__item-title">{title}</p>
        <p className="contents__item-artist">&nbsp; {artist}</p>
      </div>
      {isLoading && className === "last" ? (
        <div className="contents__loading">
          <p className="contents__loading-text">Loading...</p>
        </div>
      ) : null}
    </li>
  );
};

export default List;
