import { useState } from "react"

export  function ConceptuseState() {
  const [Count,setCount]=useState(0);
  const increaseCount=()=>{
     setCount(Count=>Count+4);
  }

  return (
    <>
    <div>conceptuseState</div>
    <button onClick={increaseCount}>count increase {Count}</button>

    </>
  )
}
