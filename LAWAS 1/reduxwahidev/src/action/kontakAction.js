import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

export const getListKontak = () => {
  return (dispacth) => {
    // loading
    dispacth({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errroMessage: false,
      },
    });

    //get api
    axios({
      method: "GET",
      url: "http://localhost:5000/kontaks",
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get api
        dispacth({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errroMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        dispacth({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errroMessage: error.message,
          },
        });
      });
  };
};
