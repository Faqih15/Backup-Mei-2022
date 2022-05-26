import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak } from "../../actions/kontakAction";

function ListKontak() {
  const { getListKontakResult, getListkontakLoading, getListKontakError } =
    useSelector((state) => state.KontakReducer);

  const dispacth = useDispatch();

  useEffect(() => {
    //panggil action getListKontak
    console.log("1. useEffect componentDidMount");
    dispacth(getListKontak());
  }, [dispacth]);

  return (
    <div>
      <h4> List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {" "}
              {kontak.nama} - {kontak.nohp}
            </p>
          );
        })
      ) : getListkontakLoading ? (
        <p>Loading Gaesssssss....</p>
      ) : (
        <p>
          {getListKontakError
            ? getListKontakError
            : "Data Kosong karena Error!!!"}
        </p>
      )}
    </div>
  );
}

export default ListKontak;
