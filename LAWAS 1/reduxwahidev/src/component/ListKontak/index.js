import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListKontak } from "../../action/kontakAction";

function ListKontak() {
  const dispacth = useDispatch();

  useEffect(() => {
    // panggil action get list kontak
    dispacth(getListKontak());
  }, [dispacth]);

  return (
    <div>
      <h4>ListKontak</h4>
    </div>
  );
}

export default ListKontak;
