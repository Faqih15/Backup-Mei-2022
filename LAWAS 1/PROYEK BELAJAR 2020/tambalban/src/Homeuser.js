import React, { Component } from "react";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
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

export default class Homeseller extends Component {
  render() {
    return (
      <>
        <Navbar sticky="top" bg="dark" variant="dark">
          <Container>
            <h5 className="text-light">Halaman Seller</h5>
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
        <div style={{ margin: "auto" }}>
          <Row>
            <Col>
              <Card
                onSubmit={this.onsubmit}
                bg={"info"}
                style={{ width: "30rem" }}
              >
                <h5>Informasi Lokasi</h5>
                <Form>
                  <Form.Group>
                    <Form.Label>Lokasi</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan lokasi anda saat ini"
                    />
                  </Form.Group>
                  <Button>Kirim</Button>
                </Form>
              </Card>
            </Col>
            <Col>
              <Card
                onSubmit={this.onsubmit}
                bg={"warning"}
                style={{ width: "30rem" }}
              >
                <h5>Informasi Lokasi</h5>
                <Form>
                  <Form.Group>
                    <Form.Label>Lokasi</Form.Label>
                    <Form.Control type="text" placeholder="Ketik Chat Anda" />
                  </Form.Group>
                  <Button>Kirim</Button>
                </Form>
              </Card>
            </Col>
            {/* <MyMapComponent isMarkerShown />
            // Map with a Marker
            <MyMapComponent isMarkerShown={false} />
            // Just only Map */}
          </Row>
        </div>
      </>
    );
  }
}

const MyMapComponent = withGoogleMap((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
));
