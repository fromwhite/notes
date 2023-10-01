import React, { ReactNode } from "react";
import { Header, HeadProps } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  children: ReactNode;
  head?: HeadProps;
};

export const Layout = ({ children, head, ...props }: LayoutProps) => {
  return (
    <>
      <Header {...head} />
      {children}
      <Footer />
    </>
  );
};
