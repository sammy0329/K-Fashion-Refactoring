import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import styleData from "./JsonData/StyleData";

const Styles = ({ StyleList }) => {
  return (
    <Container>
      <div className="text-center" id="style-body">
        <img
          src="https://i.ibb.co/R6RwNxx/grape.jpg"
          width="auto"
          height="auto"
          alt="inputImg"
        />
        <br />
        <br />
        <h4 className={`text-${styleData[StyleList[0].styleName]["color"]}`}>
          <strong>{StyleList[0].styleName} 스타일</strong>
        </h4>
 
        <h4 className={`text-${styleData[StyleList[0].styleName]["color"]}`}>
          <strong>{StyleList[0].styleRate}%</strong>
        </h4>
        <p>{styleData[StyleList[0].styleName]["summary"]}</p>
      </div>

      <Row xs={1} md={1}>
        {StyleList &&
          StyleList.map((style_, idx) => (
            <Col key={idx}>
              <h6 className={`text-${styleData[style_.styleName]["color"]}`}>
                <strong>{style_.styleName}</strong>
              </h6>
              <ProgressBar
                striped
                variant={styleData[style_.styleName]["color"]}
                animated
                now={style_.styleRate}
                label={`${style_.styleRate}%`}
              />

              <br />
            </Col>
          ))}

      </Row>
    </Container>
  );
};

export default Styles;
