import React from "react";
import { Container } from "./layout.style";

interface ILayoutProps {
  children: React.ReactChild;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
export default Layout;
