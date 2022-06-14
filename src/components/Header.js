import React, { useState } from "react";
import { Container, Navbar, Nav, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    alert("This feature doesn't work yet. Stay tuned.");
    setShow(false);
  };
  return (
    <React.Fragment>
      <div className="p-5 text-white fluid jumbo">
        <h1>
          <img
            src={"../assets/images/logoc.jpg"}
            className="logo-header"
            alt="logo book"
          />{" "}
          Project ELAR
        </h1>
      </div>
      <Navbar
        sticky="top"
        variant="dark"
        className="backg-dark text-white mb-5 navbartext"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/projectelar-r/">
            <img
              src={"../assets/images/logoc.jpg"}
              alt="book logo"
              className="logo-navbar"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/projectelar-r/"> Home </Nav.Link>
              <Nav.Link href="/projectelar-r/learning"> Learn </Nav.Link>
              <Nav.Link href="/projectelar-r/aboutus"> About </Nav.Link>
            </Nav>
            <span>
              <Button
                variant="primary"
                onClick={handleShow}
                className="ml-auto"
              >
                Login
              </Button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
