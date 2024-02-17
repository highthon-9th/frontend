import { ReactNode } from "react";
import { styled } from "styled-components";

interface IFLayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: IFLayoutProps) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div`
  width: 100%;

  height: 100vh;
`;
