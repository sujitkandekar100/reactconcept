import { useState,useEffect } from "react"

export function ConceptuseEffect() {
    const[Count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(Count+4);
        },2000);
    });
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setCount(Count+4);
        },2000)
        return () => clearTimeout(timer); // Cleanup

    }    
    ,[]);
  return (
    <>
    <div>ConceptuseEffect</div>
    <p>Count is {Count}</p>
    </>
  )
}
/*Purpose:-
Manages side effects like fetching data, updating the DOM, or managing timers.
Usage:
Run Once on Mount: Use an empty dependency array ([]).
Run on Updates: Add specific dependencies (e.g., [state, props]).
Run After Every Render: Omit the dependency array (use cautiously).
When to Use:
Fetch data from APIs.
Set up event listeners or timers.
React to state or prop changes.
Sync with external systems (e.g., localStorage).
When Not to Use:
For tasks handled synchronously in the render logic.
To calculate or derive state directly in JSX.
Best Practices:
Include only necessary dependencies in the array.
Clean up effects (e.g., unsubscribe, clear timers) in the return function.
Avoid infinite re-renders by mismanaging dependencies.*/
