import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/createSlice";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count:{count}</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button
          onClick={() => dispatch(increment())}
          style={{ margin: "0 10px" }}
        >
          +1
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>
    </div>
  );
};

export default Home;
