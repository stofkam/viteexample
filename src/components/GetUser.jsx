import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GetUser = () => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    let isMounted = true; // Защита от установки стейта в размонтированный компонент
    setisLoading(true);
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((d) => {
        if (isMounted) {
          setData(d);
          setisLoading(false);
        }
      })
      .catch((e) => {
        if (isMounted) {
          setError(e);
          setisLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(error);

  return (
    <div>
      {!data.error ? (
        <>
          <h2>User name: {data.name}</h2>
          <p>Role: {data.role}</p>
        </>
      ) : (
        <p>Data not found</p>
      )}
    </div>
  );
};

export default GetUser;
