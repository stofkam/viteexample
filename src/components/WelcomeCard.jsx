import React, { useEffect, useState } from "react";

function Card({ children }) {
  return <div className="card-border">{children}</div>;
}

const WelcomeCard = ({ name }) => {
  const [count, setCount] = useState(0);
  const isMorning = new Date().getHours() < 12;
  const greeting = isMorning ? "Good Morning" : "Good Afternoon";

  useEffect(() => {
    const handleResize = () => console.log(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const todoList = [
    { id: 1, text: "Выучить React" },
    { id: 2, text: "Написать книгу по Go" },
    { id: 3, text: "Настроить MinQLX" },
  ];

  return (
    <div className="card-ccontainer">
      <h1>
        {greeting}, {name}!
      </h1>
      <Card>
        <h2>Card title</h2>
        <p>Card content</p>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </Card>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Count me</button>
    </div>
  );
};

export default WelcomeCard;
