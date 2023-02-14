import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BsHouseDoorFill } from "react-icons/bs";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Collapse className="justify-content-front">
            <Navbar.Brand href="#home">
              <BsHouseDoorFill /> <b>Home</b>
            </Navbar.Brand>
          </Navbar.Collapse>
          {/* <Navbar.Brand href="#home"><BsHouseDoorFill />{' '}Home</Navbar.Brand> */}
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text style={{ color: "white" }}>
              <b>패션 스타일 분석</b>
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ color: "white" }}>
              <b>
                Kwangwoon Univ.
                <br />
                Chambit Design Project
              </b>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
