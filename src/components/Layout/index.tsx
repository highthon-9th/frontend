import { ReactNode } from "react";
import { createGlobalStyle, styled } from "styled-components";

interface IFLayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: IFLayoutProps) => {
  return <div>{children}</div>;
};

export default Layout;
