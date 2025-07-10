// console.log("Hello")

const student = {
    name: "Raman",
    height: 175,
    weight: 55
};

const calculateBmi = (obj) =>{
    const{height, weight} = obj;

    const bmi = height/weight;
    console.log(bmi);
}

calculateBmi(student);