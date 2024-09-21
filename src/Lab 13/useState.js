import React from 'react'
import { useState } from "react";

function SetCount() {
  const [count, setCount] = useState(0);
  const [Size, setSize] = useState(100);

  let sty = {
    width : "100px",
    margin : "20px"
  }
  let sty2 = {
    width : `${{Size}+10}px`,
    height: "auto"
  }

  return (
    <>
      <div>
        <h1 style={sty}>{count}</h1>
        <button type="button" onClick={() => {setCount(count-1)} }>Dicrement</button>
        <button type="button" onClick={() => {setCount(count+1)} }>Increment</button>
      </div>
      <br/><hr/>
      <div>
        <button style={sty} type="button" onClick={() => {setSize(Size + 10)} }>Zoom</button><br/>
        <img src="https://wallpapers.com/images/hd/best-cool-luminous-fox-40lkhq7b7tl3p1qw.jpg" alt="" />
        
      </div>
    </>
  )
}

export default SetCount;