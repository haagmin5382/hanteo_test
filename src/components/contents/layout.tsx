import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ComponentType } from "Type";

const Layout = ({ children }: ComponentType.LayoutProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="contents ">{children}</div>
    </QueryClientProvider>
  );
};

export default Layout;
