import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="mt-4">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
