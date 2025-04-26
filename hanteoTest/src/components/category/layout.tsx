import React from "react";
import type { ComponentType } from "Type";

const Layout = ({ children }: ComponentType.LayoutProps) => {
  return <div className="category">{children}</div>;
};

export default Layout;
