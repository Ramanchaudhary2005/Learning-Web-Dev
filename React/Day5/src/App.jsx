import { useState } from "react";

const App = () => {
  const [monitor, controller] = useState("Raman");

  const handlesearch = (e) => {
    const val = e.target.value;
    controller(val);
    console.log(monitor); 
  };

  const handlePaste = (e) => {
    e.preventDefault(); 
    alert("Pasting is disabled!");
  };

  return (
    <div>
      <input
        type="text"
        onChange={handlesearch}
        onPaste={handlePaste}
        value={monitor}
      />
      <h2>{monitor}</h2>
    </div>
  );
};

export default App;


