import { useState } from "react"

export  function ConceptuseState() {
  const [Count,setCount]=useState(0);
  const [CarDetails,setCarDetails]=useState({carName:'toyota fortuner',carModel:'xl',safetyRating:5,carPrice:35000});
  const increaseCount=()=>{
     setCount(Count=>Count+4);
  }
  const changeCar = () => {
    setCarDetails((prevDetails) => ({
      ...prevDetails, // Spread previous state to preserve existing fields
      carName: "Tata Safari",
      carPrice: 180000,
    }));
  };
  return (
    <>
    <div>conceptuseState</div>
    <button onClick={increaseCount}>count increase {Count}</button>
    <br/>
    <button onClick={changeCar}>next car</button>
     <p>A Car Name is {CarDetails.carName}</p>
     <p>Car model:{CarDetails.carModel} <br/> Car Safety Rating :{CarDetails.safetyRating} star<br/> car price:{CarDetails.carPrice}</p>
    </>
  )
}
