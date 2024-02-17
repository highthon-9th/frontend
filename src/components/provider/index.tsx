import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Layout from "../Layout";

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>{children}</Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Provider;
