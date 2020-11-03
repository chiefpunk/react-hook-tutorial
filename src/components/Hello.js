import React, { useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("unMount");
    };
  }, []);

  return <div>Hello</div>
};

export default Hello;
