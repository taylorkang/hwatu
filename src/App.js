import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

import banner from "./images/hwatu-banner-opacity.png";

import "./App.css";

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">All About Hwatu</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => {
  const jumboStyle = {
    backgroundImage: `url(${banner})`,
    paddingTop: "1rem",
    minHeight: "350px"
  };

  const thick = {
    fontWeight: "bold",
    color: "#333333"
  };

  const MainNav = () => {
    return (
      <Nav
        className="justify-content-end"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link className="header-link" style={thick} href="/home">
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="header-link" style={thick} eventKey="link-1">
            Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="header-link" style={thick} eventKey="link-2">
            Link
          </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item> */}
      </Nav>
    );
  };

  return (
    <>
      <Container>
        <MainNav />
        {/* <h1 className="header">Welcome To React-Bootstrap</h1> */}
        {/* <ExampleToast>
    We now have Toasts
    <span role="img" aria-label="tada">
      🎉
    </span>
  </ExampleToast> */}
      </Container>
      <Jumbotron fluid style={jumboStyle}></Jumbotron>
    </>
  );
};

export default App;
