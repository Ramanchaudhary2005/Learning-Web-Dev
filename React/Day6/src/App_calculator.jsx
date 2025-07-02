import { useState } from "react";

const App = () => {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (e) => {
    const val = Number(e.target.value);

    if (operator === null) {
      setFirstNumber((prev) => {
        if (prev === null) return val;
        return prev * 10 + val;
      });
    } else {
      setSecondNumber((prev) => {
        if (prev === null) return val;
        return prev * 10 + val;
      });
    }
  };

  
  let ans = null;
  if (firstNumber !== null && secondNumber !== null && operator !== null) {
    switch (operator) {
      case "+":
        ans = firstNumber + secondNumber;
        break;
      case "-":
        ans = firstNumber - secondNumber;
        break;
      case "*":
        ans = firstNumber * secondNumber;
        break;
      case "/":
        ans = secondNumber !== 0 ? firstNumber / secondNumber : "Error";
        break;
      default:
        ans = null;
    }
  }

  // Reset Function
  const handleClear = () => {
    setFirstNumber(null);
    setSecondNumber(null);
    setOperator(null);
  };

  return (
    <div>
      <h2>Simple Calculator</h2>

      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={handleButtonClick} value={num}>
            {num}
          </button>
        ))}
      </div>

      <div>
        <button onClick={() => setOperator("+")}>+</button>
        <button onClick={() => setOperator("-")}>-</button>
        <button onClick={() => setOperator("*")}>*</button>
        <button onClick={() => setOperator("/")}>/</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {firstNumber !== null && <p>First Number: {firstNumber}</p>}
        {operator !== null && <p>Operator: {operator}</p>}
        {secondNumber !== null && <p>Second Number: {secondNumber}</p>}
      </div>

      {ans !== null && (
        <div style={{ marginTop: "10px", fontWeight: "bold" }}>
          <p>
            Result: {firstNumber} {operator} {secondNumber} = {ans}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;

