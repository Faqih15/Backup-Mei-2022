import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

export const getListKontak = () => {
  console.log("2. Masuk Action");
  return (dispacth) => {
    //loading
    dispacth({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // KETIKA LOADING DATA TERJADI, REDUCER TETAP DIPANGGIL
    // MAKA REDUCER KELUAR 2X : KETIKA LOADING DAN KETIKA ( BERHASIL/GAGAL )

    // get API
    axios({
      method: "GET",
      url: "http://localhost:5000/kontaks",
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get API
        console.log("3. berhasil dapat data", response);
        dispacth({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get API
        console.log("3. gagal dapat data", error);
        dispacth({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
