// import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./parfaitSlice";
import { useState } from "react";

export const ParfaitView = () => {
  const [value, setValue] = useState(1);
  const numOfParfaits = useSelector((state) => state.parfait.numOfParfaits);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of parfait -{numOfParfaits}</h2>
      <button onClick={() => dispatch(ordered())}>order parfait</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        restock parfait
      </button>
    </div>
  );
};
