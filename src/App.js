import React, { useState, useRef, useLayoutEffect, useCallback } from "react";
import Hello from './components/Hello'
import { CallBackExample } from './components/CallBackExample';
import { Square } from "./components/Square";

const  App = () => {
  const [count, setCount] = useState(0);
  const favouriteNums = [4, 17,9];
  const increment = useCallback((n)=>{
    setCount(c => c + n)
  },[setCount]);

  return (
    <div>
      <CallBackExample increment={increment} />
      <div>count:{count}</div>
      {favouriteNums.map(n=>{
        return (
          <Square increment = {increment} n={n} key={n} />
        )
      })}
    </div>
  );
}

export default App;
