"use client"
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])

  const handleInput = () => {
    if (input !== "") {
      setList(list => [...list, input])
    }
  }

  return (
    <div style={{
      padding: "100px 100px 100px 100px"
    }}>
      <div >
        Hello
      </div>
      <div style={{
        width: "300px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"  
      }}>
      <input style={{margin: "10px"}} onChange={(e) => setInput(e.target.value)} />
      <button style={{boxShadow: "0 4px 12px gray", margin: "10px"}} onClick={handleInput}>Add</button>
      </div>
      <div>
        <ul>
          {list.map((item) => {
            return (<li key={item}>{item}</li>)
          })}
        </ul>
      </div>
    </div>
  );
}
