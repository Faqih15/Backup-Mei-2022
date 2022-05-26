import React, { useEffect, useState } from "react";

export default function Test() {
  const [test, settest] = useState("second");
  const [modal, setmodal] = useState(false);
  const handleChange = (e) => {
    settest(e.target.value);
  };
  useEffect(() => {
    // settest('asd')
    // return () => {}
  }, []);

  return (
    <div className="box relative h-100">
      <h1>{test}</h1>
      <button onClick={() => setmodal(true)}>Show Modal</button>
      {modal === true ? (
        <div className="modal">
          Modal <br />
          <button onClick={() => setmodal(false)}>Hide Modal</button>
          <div>
              label
          </div>
        </div>
      ) : null}
    </div>
  );
}
