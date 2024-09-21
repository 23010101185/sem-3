import React, { useEffect, useState } from "react";


const UseEffectExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://667255e96ca902ae11afe46f.mockapi.io/Faculty")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <h1>Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt=""></img>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseEffectExample;
