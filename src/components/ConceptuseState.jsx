import { useState } from "react"

export  function ConceptuseState() {
  const [Count,setCount]=useState(0);
  const [CarDetails,setCarDetails]=useState({carName:'toyota fortuner',carModel:'xl',safetyRating:5,carPrice:35000});
  const increaseCount=()=>{
    setCount(Count=>Count+4);
    /* setTimeout(()=>{
      setCount(Count=>Count+4);
     },2000)*/ //when settimeout set time not show repeatly work use useffect.
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
     <p>Car model:{CarDetails.carModel} <br/> Car Safety Rating :{CarDetails.safetyRating} star<br/> car price:${CarDetails.carPrice}</p>
    </>
  )
}
/*
Key Features:-
React re-renders the component when the state updates.
Supports all data types: numbers, strings, arrays, objects.
Use functional updates if the new state depends on the old state.
Where to Use useState
User Input Handling: Manage form fields like text inputs, checkboxes, etc.

Example: Capturing and displaying user-entered text.
Toggles: Show/hide elements, dropdown menus, or modal visibility.

Example: A button to toggle content display.
Counters: Track numbers like clicks or scores.

Example: Incrementing a counter.
API Data: Store and display data fetched from an API.

Example: Rendering a list of users.
Dynamic Lists: Add, remove, or modify items in a list.

Example: A todo list or shopping cart.
Switching Views: Manage tabs or conditionally display components.

Example: Switching between "Home" and "Profile" tabs.
Local Component State: Manage temporary states like hover effects, animations, or small UI updates.

Don't Use useState:-

For global state (use Context API or Redux).
For static data (use props or hardcoded values).
For derived state (compute it instead of storing).
*/
