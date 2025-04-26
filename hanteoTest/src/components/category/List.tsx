import React from "react";

const List = ({ name, link }: { name: string; link: string }) => {
  return (
    <a className="category__item" href={link}>
      {name}
    </a>
  );
};

export default List;
