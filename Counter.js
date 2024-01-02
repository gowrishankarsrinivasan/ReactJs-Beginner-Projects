import React from 'react';
import "./graphics.css";
import { useState } from 'react';
const ButtonIncrementer = () => {
  const [count , setCount] = useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    if(count > 0){
      setCount(count-1);
    }
  }
  return (
    <div className='body'>
    <p>Count: {count}</p>
    <button onClick={increment}>increment++</button>
    <button onClick={decrement}>decrement--</button>
    </div>
  );
}

export default ButtonIncrementer;
