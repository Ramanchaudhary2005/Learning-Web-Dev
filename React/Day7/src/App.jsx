import { useEffect, useState } from "react";

const App=()=>{
  const[count, setCount] = useState(0);
  console.log("component render or re-render",count);

  useEffect(()=>{
    console.log("Hello")
  });

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default App;