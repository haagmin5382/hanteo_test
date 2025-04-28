"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const List = ({ name, link }: { name: string; link: string }) => {
  const pathname = usePathname();
  const active = pathname === link;

  return (
    <Link
      className={`category__item ${active ? `category__item--active` : ``}`}
      href={link}
    >
      {name}
    </Link>
  );
};

export default List;
