const { division } = require("./mathshelper");

const calculateBmi = (obj) => {
  const { height, weight } = obj;

  const bmi = division(height, weight);
  console.log(bmi);
};

module.exports = {
  calculateBmi: calculateBmi,
};