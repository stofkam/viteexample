import React, { useEffect, useRef, useState } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);
  const timerId = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const startTimer = () => {
    timerId.current = setInterval(() => console.log("Tick"), 1000);
  };

  const stopTimer = () => {
    return clearInterval(timerId.current);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default InputFocus;
