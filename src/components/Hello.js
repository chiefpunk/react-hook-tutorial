import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useMeasure } from "../hooks/useMeasure";

const Hello = () => {
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const [rect, divRef] = useMeasure([data]);


  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "loading..." : data}</div>
      </div>
      <pre>
        {JSON.stringify(rect, null, 2)}
      </pre>

      <div>count:{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
    </div>
  );
};

export default Hello;
