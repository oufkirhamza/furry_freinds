import React, { useState } from "react";

export const FirstSection = () => {
    const [count, setCount] = useState(0);
    const plusOne = () => {
        if (count > -1 && count < 3) {
            setCount(count + 1)
        }
    }
    const minusOne = () => {
        if (count > 0 && count < 4) {
            setCount(count - 1)
        }
    }
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        {Array.from("1234").map((e, index) => (
          <div key={index} className={`w-10 h-10 rounded-full flex justify-center items-center  ${count == index ? 'bg-green-500' : 'bg-purple-400'}`}>

            <h1>{e}</h1>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button onClick={minusOne}>Back</button>
        <button onClick={plusOne}>Next</button>
      </div>
    </div>
  );
};
