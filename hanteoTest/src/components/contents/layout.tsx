import { ComponentType } from "Type";

const Layout = ({ children }: ComponentType.LayoutProps) => {
  return <div className="contents ">{children}</div>;
};

export default Layout;
