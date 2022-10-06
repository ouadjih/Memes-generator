import React,{useState} from "react";

export default function Greeting(props) {
  //getting random image from data
    let [val,setVal] = useState(props.num)
  //
  function increase(){
    setVal(prevVal=>prevVal+1)
    console.log(val)
  }
  function decrease(){
    setVal(()=>val-1)
    console.log(val)
  }
  return (
    <div className="counter">
      <button onClick={increase}>+</button>
      <div className="result">{val}</div>
      <button onClick={decrease}>-</button>
    </div>
  );
}
