import { ComponentType } from "Type";

const Layout = ({ children }: ComponentType.LayoutProps) => {
  return <article className="slider">{children}</article>;
};

export default Layout;
