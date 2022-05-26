import React, { Component } from "react";

import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Navbar,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Homeuser extends Component {
  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <h5 className="text-light">Halaman User Client</h5>
          <Navbar.Brand>
            <Link to="/" class="text-decoration-none">
              <img
                alt=""
                src="https://i.pravatar.cc/600"
                width="50"
                height="50"
                className="d-inline-block align-top rounded-circle border border-warning"
              />{" "}
              Home Utama
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

// Form.Control
//                 /* name="gambar"
//                   type="text"
//                   value={this.state.gambar}
//                   placeholder="Masukkan url gambar"
//                   style={{ width: "35rem" }}
//                   onChange={(e) => this.setState({ gambar: e.target.value })} */
//                 />
//               </Form.Group>
