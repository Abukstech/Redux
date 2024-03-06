// import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice creams -{numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>order icecream</button>
      <button onClick={() => dispatch(restocked(4))}>restock ice cream</button>
    </div>
  );
};
