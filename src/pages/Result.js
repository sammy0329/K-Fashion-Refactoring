import React from "react";
import Layout from "../layouts/Layout";
import Cards from "../components/Cards";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Result() {
  return (
    <Layout>
      <br />
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
    
              <Cards
                productStore="SJ스토어"
                productName="SJ 맨투맨"
                productImg="https://i.ibb.co/R6RwNxx/grape.jpg"
                productPrice="12000"
                productCategory="상의"
                productURL="https://sammy0329.tistory.com/62"
              />

          </Col>
        ))}
      </Row>

      <br />
    </Layout>
  );
}

export default Result;
