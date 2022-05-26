import React, { Component } from "react";

import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Telwin extends Component {
  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <h5 className="text-light">TAMBAL BAN ONLINE</h5>
          <Navbar.Brand>
            <Link to="/Homeuser" class="text-decoration-none">
              <img
                alt=""
                src="https://i.pravatar.cc/600"
                width="50"
                height="50"
                className="d-inline-block align-top rounded-circle border border-warning"
              />{" "}
              Home 2
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/Homeseller" class="text-decoration-none">
              <img
                alt=""
                src="https://i.pravatar.cc/610"
                width="50"
                height="50"
                className="d-inline-block align-top rounded-circle border border-warning"
              />{" "}
              Home 1
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
