import React, { Component } from "react";
import { Button, ButtonGroup, Form, Modal, Table } from "react-bootstrap";

export default class Esde extends Component {
  constructor() {
    //deconstructor untuk mendeklarasikan class
    super();
    this.state = {
      //state adalah tempat menyimpan data sementara bila diubah menyebabkan render
      tampilkanModalTambah: false,
      tampilkanModalEdit: false,
      daftar: [], // state berupa array utk menampung banyak objek
      dataEdit: "",
      indexEdit: "",
    };
  }

  // props bisa merubah dari luar komponen
  // state tidak bisa diubah dari luar komponen
  // jika mau mengubah state ya pakai props

  saveTambah = (e) => {
    e.preventDefault(); //biar tidak muat ulang halaman

    const { tampilkanModalTambah, daftar } = this.state;
    // console.log(tampilkanModalTambah, daftar, tes);
    const { name, umur, alamat } = e.target;
    // console.log(name.value, umur.value, alamat.value);
    daftar.push({ name: name.value, umur: umur.value, alamat: alamat.value });
    this.setState({ daftar: daftar });
    this.fungsiTampilkanModalTambah();
    // daftar.push({ nama: nama.value, umur: umur.value, alamat: alamat.value }) = o.target ;
  };

  saveEdit = (e) => {
    e.preventDefault();
    this.state.daftar[this.state.indexEdit] = {
      name: e.target.name.value,
      umur: e.target.umur.value,
      alamat: e.target.alamat.value,
    };
    this.fungsiTampilkanModalEdit();
  };

  fungsiTampilkanModalTambah() {
    this.setState({ tampilkanModalTambah: !this.state.tampilkanModalTambah });
  }

  fungsiTampilkanModalEdit() {
    this.setState({ tampilkanModalEdit: !this.state.tampilkanModalEdit });
  }

  edit(params) {
    this.setState({ indexEdit: params });
    this.fungsiTampilkanModalEdit();
    console.log("edit", params);
    console.log(this.state.daftar[params]);
  }

  hapus(parazet) {
    this.state.daftar.splice(parazet, 1);
    // splice, yg pertama adalah index yang akan dihapus, yg kedua adalah jumlah yg index yg dihapus
    // parazet adalah indexnya
    this.setState({ daftar: this.state.daftar });
    // this.setState({ x: false });
  }

  render() {
    const { tampilkanModalTambah, daftar, tampilkanModalEdit } = this.state;
    console.log(this.state);
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nama Murid</th>
              <th>Umur Murid</th>
              <th>Alamat Murid</th>
            </tr>
            {daftar?.map((a, b) => (
              <tr>
                <td>{a.name}</td>
                <td>{a.umur}</td>
                <td>{a.alamat}</td>
                <Button variant="primary" onClick={() => this.edit(b)}>
                  Edit
                </Button>{" "}
                {/* //TOMBOL EDIT DISINI// */}
                <Button
                  name="trash"
                  variant="primary"
                  onClick={() => this.hapus(b)}
                >
                  Delete
                </Button>
              </tr>
            ))}
          </thead>
        </Table>
        <Button
          variant="primary"
          onClick={() => this.fungsiTampilkanModalTambah()}
        >
          Tambah
        </Button>{" "}
        {/* //TOMBOL TAMBAH DISINI// */}
        {/* var contohTernary = (buah == 'apel' ? 'Ini adalah buah apel' : 'Bukan apel'); */}
        <Modal show={tampilkanModalEdit}>
          <Modal.Header
            closeButton
            onClick={() => this.fungsiTampilkanModalEdit()}
          >
            <Modal.Title>Edit Daftar Murid SD</Modal.Title>
          </Modal.Header>
          <Modal.Body>Masukkan Nama Murid Yang Akan Diedit</Modal.Body>
          <Modal.Footer>
            <Form onSubmit={this.saveEdit}>
              <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Ketik Nama"
                  defaultValue={this.state.daftar[this.state.indexEdit]?.name}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Umur</Form.Label>
                <Form.Control
                  name="umur"
                  type="number"
                  placeholder="Ketik Umur"
                  defaultValue={this.state.daftar[this.state.indexEdit]?.umur}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Alamat</Form.Label>
                <Form.Control
                  name="alamat"
                  placeholder="Ketik Alamat"
                  defaultValue={this.state.daftar[this.state.indexEdit]?.alamat}
                />
              </Form.Group>
              <br />
              <Button
                variant="secondary"
                onClick={() => this.fungsiTampilkanModalEdit()}
              >
                Close
              </Button>
              <Button
                variant="primary"
                type="submit"
                // onClick={() => this.fungsiTampilkanModalEdit()}
              >
                Save Changes
              </Button>
            </Form>
            <br />
          </Modal.Footer>
        </Modal>
        <Modal show={tampilkanModalTambah}>
          <Modal.Header
            closeButton
            onClick={() => this.fungsiTampilkanModalTambah()}
          >
            <Modal.Title>Daftar Murid SD</Modal.Title>
          </Modal.Header>
          <Modal.Body>Masukkan Nama Murid Yang Akan Didata</Modal.Body>
          <Modal.Footer>
            <Form onSubmit={this.saveTambah}>
              <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Ketik Nama"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Umur</Form.Label>
                <Form.Control
                  name="umur"
                  type="number"
                  placeholder="Ketik Umur"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Alamat</Form.Label>
                <Form.Control name="alamat" placeholder="Ketik Alamat" />
              </Form.Group>
              <br />
              <Button
                variant="secondary"
                onClick={() => this.fungsiTampilkanModalTambah()}
              >
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
            <br />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

//export default BootstrerapModal;
// EDIT ISI TABEL DENGAN MEMBUAT BUTTON EDIT
// DIPISAHKAN BERDASARKAN INDEKS
// ARRAY TERDIRI DARI INDEKS DAN VALUE / VALUE BISA SAMA / INDEKS TIDAK BISA SAMA
// MAKA DENGAN ITU DIPISAHKAN BERDASARKAN INDEKS NYA
