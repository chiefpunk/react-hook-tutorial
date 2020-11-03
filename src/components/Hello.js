import React, { useEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const Hello = () => {

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  return (
    <div>
      {!data ? "loading..." : data}
      <div>count:{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
    </div>
  );
};

export default Hello;
