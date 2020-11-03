import React, { useState, useRef, useLayoutEffect } from "react";
import { useForm } from './hooks/useForm';
import Hello from './components/Hello'
import { useMeasure } from "./hooks/useMeasure";

const  App = () => {
  const [values, handleChange] = useForm({email:'', password:''});
  const [showHello, setShowHello] = useState(true);
  
  const inputRef = useRef();
  const hello = useRef(()=>{
    console.log('hello');
  });

  const [rect, inputRef2] = useMeasure([]);

  return (
    <div>
      
      <button onClick={()=>setShowHello(!showHello)}>{showHello ? 'Hide' : 'Show'}</button>
      {showHello && <Hello />}
      
      <input ref={inputRef} name='email' value={values.email} onChange={handleChange} />
      <input ref={inputRef2} type="password" value={values.password} name='password' onChange={handleChange} />
      <button onClick={()=>{
        inputRef.current.focus();
        hello.current()
      }}>focus</button>
    </div>
  );
}

export default App;
