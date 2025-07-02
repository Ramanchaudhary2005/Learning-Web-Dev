import {useState} from "react";

const App = () => {
  // let username = "Raman";
  const[monitor, controller] = useState("Raman");
  console.log(monitor);
  const handlesearch = (e) => {
    const val = e.target.value;
    controller(val)
    console.log(monitor);
  };

  return (
    <div>
      <input type="text" onChange={handlesearch} value={monitor}/>
      <h2>{monitor}</h2>
    </div>
  );
};

export default App;

