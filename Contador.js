import React, { useEffect } from "react";
import { useState } from "react";

const Contador = () => {
  const [cuenta, setCuenta] = useState(100);
  const aumentar = () => {
    setCuenta(cuenta + 100);
  };
  const disminuir = () => {
    setCuenta(cuenta - 100);
  };
  const reset = () => {
    setCuenta(0);
  };
  useEffect(() => {
    console.log(`El contador va en ${cuenta}`);
  }, [cuenta]);
  return (
    <div>
      <center>
        <h1>{cuenta}</h1>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={disminuir}>Disminuir</button>
        <button onClick={reset}>Reset</button>
      </center>
    </div>
  );
};

export default Contador;
