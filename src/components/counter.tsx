import React, { useState } from "react";

const Counter = (quantity) => {
<<<<<<< HEAD
  const [Counter, setCounter] = useState(0);
=======
  const [Counter, setCounter] = useState(1);
>>>>>>> 8603220851209c742d2d00daa77e64d743d106e7
  return (
    <div className="flex mt-10 ml-20">
      <h1 className="text-2xl font-bold">jumlah</h1>
      <button
        onClick={() => {
<<<<<<< HEAD
          if (quantity.quantity !== null && quantity.quantity < Counter) {
            alert("Jumlah stok tidak ada");
=======
          if (quantity.quantity !== null && quantity.quantity < Counter + 1) {
>>>>>>> 8603220851209c742d2d00daa77e64d743d106e7
            return;
          }
          setCounter((prev) => prev + 1);
        }}
        className={
          quantity.quantity !== null && quantity.quantity < Counter + 1
            ? "hidden"
            : "text-2xl font-bold ml-10"
        }
      >
        +
      </button>
      <p className="text-2xl font-bold ml-10">{Counter}</p>
      <button
        onClick={() => {
          if (Counter > 0) {
            setCounter((prev) => prev - 1);
          }
        }}
        className={Counter > 0 ? "text-3xl font-bold ml-10" : "hidden"}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
