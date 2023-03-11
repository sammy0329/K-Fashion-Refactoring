// 카드들 노출시킬 컴포넌트

import React from "react";
import { Container, Col, Row, Card, CardGroup } from "react-bootstrap";

const Cards = ({ CardList }) => {
  const columnPerRow = 3;

  return (
    <Container>
      <h4>유사 스타일 추천</h4>
      <hr />
      <CardGroup>
        <Row xs={1} md={columnPerRow}>
          {CardList &&
            CardList.map((product, idx) => (
              <Col key={idx}>
                <Card style={{boxShadow : '1px 5px 5px #006400'}}>
                  <a
                    href={product.productURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Img variant="top" src={product.productImg} />
                  </a>
                  <Card.Body>
                    <Card.Title style={{color: "black"}}>{product.productName}</Card.Title>

                    <Card.Text>
                      {/* 천원 단위로 콤마(,) 찍기 */}
                      Price: ₩{" "}
                      {product.productPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      <br />
                      Category: {product.productCategory}
                      <br />
                      Store: {product.productStore}
                    </Card.Text>
                  </Card.Body>
                </Card>

                <br />
              </Col>
            ))}
        </Row>
      </CardGroup>
    </Container>
  );
};

export default Cards;
