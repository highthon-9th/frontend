import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import { GlobalStyle } from "../../styles/global";

interface IFProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: IFProviderProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>{children}</Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Provider;
