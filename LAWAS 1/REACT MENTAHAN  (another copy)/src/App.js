import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [group, setgroup] = useState([]);

  const plusgroup = (e) => {
    e.preventDefault();

    const label = e.target.label.value;
    // console.log(label);
    console.log(group);

    group.push({ label });
    console.log();
    // console.log(group);
  };

  return (
    <div>
      {group.map((a, b) => {
        <label></label>;
      })}
      {/* <div>halo</div> */}
      <form onSubmit={plusgroup} className="text-black flex no-wrap">
        <input
          name="label"
          type="text"
          placeholder="ketik tugas pertama"
          autoComplete="off"
          className="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
      </form>
    </div>
  );
}
