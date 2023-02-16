import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Row, Col } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Row>
        <Col xs={2} md={1}></Col>
        <Col xs={12} md={10}>
          {children}
        </Col>
        <Col xs={2} md={1}></Col>
      </Row>
      <Footer />
    </>
  );
};

export default Layout;
