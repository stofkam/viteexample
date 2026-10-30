import React from "react";
import styles from "./Button.module.css";
import MaketButton from "./MaketButton";
import { useParams } from "react-router-dom";

function InfoBox({ title, data, unreadMessages }) {
  // Достаем параметры из URL. Все параметры — строки!
  const { id } = useParams();
  // Дальше используем id для fetch запроса (см. главу 7)
  // useEffect(() => fetch(`/api/users/${id}`), [id])
  return (
    <div className="info-box">
      <h1>Профиль пользователя ID: {id}</h1>
      <h2>{title}</h2>
      <p>Nmae:{data.name}</p>
      <p>Role:{data.role}</p>
      <h3>Unread messages</h3>
      {unreadMessages.length > 0 && (
        <span className="badge">{unreadMessages.length}</span>
      )}
    </div>
  );
}

const UserProfile = () => {
  const isLoggedIn = false;
  const isError = false;
  const userData = { name: "Dmitry", role: "Java Expert" };
  const unreadMessages = [1, 2, 3, 4];

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Button clicked!");
  };
  return (
    <div>
      <InfoBox
        title="User Profile"
        data={userData}
        unreadMessages={unreadMessages}
      />
      <button
        className={isError ? styles.error : styles.btn}
        onClick={handleClick}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <MaketButton variant="primary" />
    </div>
  );
};

export default UserProfile;
