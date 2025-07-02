import {useState} from "react";

const App = () =>{
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (e) =>{
    const val = e.target.value;
    console.log(val);
  }
  
  return(
    <div>
      <div>
        <button onClick={handleButtonClick}>1</button>
        <button onClick={handleButtonClick}>2</button>
        <button onClick={handleButtonClick}>3</button>
        <button onClick={handleButtonClick}>4</button>
        <button onClick={handleButtonClick}>5</button>
        <button onClick={handleButtonClick}>6</button>
        <button onClick={handleButtonClick}>7</button>
        <button onClick={handleButtonClick}>8</button>
        <button onClick={handleButtonClick}>9</button>
        <button onClick={handleButtonClick}>0</button>
      </div>
      <div>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
      </div>
      <div>

      </div>
    </div>
  )
}

export default App;
