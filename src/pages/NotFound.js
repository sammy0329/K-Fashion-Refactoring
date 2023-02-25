import React from "react";
import { Container, Row, Col } from "react-bootstrap";


// 전반적인 404 페이지 완료 이후에 디자인 다시 손보기!!

// body 정가운데 위치하게 하는 style
const centerbody={

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh"

}

const NotFound = () => {
  return (
    <div className="alertError" style={centerbody}>
      <Container>
        <Row>
          <Col>
            <img
              className="d-block w-100"
              src={require("../static/img/NotFound.png")}
              alt="NotFound 404 Error img"
            />
          </Col>
          <Col>

            <figure className="text-center">
              <h1>
                <b>Not Found 404 Error!!</b>
              </h1>
              <blockquote className="blockquote">
                <p className="mb-0">
                  The Page you are looking for doesn't exist or an other error
                  occurred.
                </p>
              </blockquote>
            </figure>
  
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
