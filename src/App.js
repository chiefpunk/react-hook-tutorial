import React, { useState, useEffect } from "react";
import { useForm } from './hooks/useForm';
import { useFetch } from "./hooks/useFetch";
import Hello from './components/Hello'


const  App = () => {
  const [values, handleChange] = useForm({email:'', password:''});
  const [count, setCount] = useState(()=>JSON.parse(localStorage.getItem("count")));
  const {data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

  useEffect(()=>{
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);
  
  return (
    <div>
      <div>
        {!data ? 'loading...' : data}
        <div>count:{count}</div>
        <button onClick={()=>setCount(c => c + 1)}>Increase</button>
      </div>
      {/* <button onClick={()=>setShowHello(!showHello)}>{showHello ? 'Hide' : 'Show'}</button>
      {showHello && <Hello />} */}
      
      <input name='email' value={values.email} onChange={handleChange} />
      <input type="password" value={values.password} name='password' onChange={handleChange} />
    </div>
  );
}

export default App;
