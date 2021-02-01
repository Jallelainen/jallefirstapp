import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const Counter = () => {
    const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("https://newapi.citiboard.se/cb/annonslista").then((response) => {
    });
  });

  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  const add = (number) => {
    setCounter(counter => (counter + number));
  };

  const minus = (number) => {
    setCounter((prevState) => prevState - number);
  };
  return (

      <div className="App">
        <h1>Counter: {counter}</h1>

        <input type="number" onChange={(e) => handleChange(e)} />
        <button onClick={() => add(value)}>Add!!!!</button>
        <button onClick={() => minus(value)}>Minus!!!!</button>
      </div>

  );
}

export default Counter