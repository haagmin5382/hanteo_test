"use client";

import React from "react";
import { useSwipeable } from "react-swipeable";
import { useRouter, usePathname } from "next/navigation";
import { ComponentType } from "Type";
import { ListData } from "../category/data.json";

const routes = ListData.map((obj) => obj.link);

export default function SwipeNavigator({
  children,
}: ComponentType.LayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentIndex = routes.indexOf(pathname);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < routes.length - 1) {
        router.push(routes[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        router.push(routes[currentIndex - 1]);
      }
    },
    trackMouse: false, // only touch events
    delta: 50, // minimum distance(px) before swipe
  });

  return (
    <div {...handlers} style={{ height: "100%", width: "100%" }}>
      {children}
    </div>
  );
}
