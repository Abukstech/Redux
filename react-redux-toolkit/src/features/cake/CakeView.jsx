// import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of Cakes -{numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>order cake</button>
      <button onClick={() => dispatch(restocked(5))}>restock cake</button>
    </div>
  );
};

export default CakeView;
