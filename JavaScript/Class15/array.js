// const states = ["Delhi","Noida","Agra"]
// console.log(states)

// const student1 = {
//     name: "Raman",
//     city: "Khurja",
//     bloodgroup: "B+"
// }

// const student2 = {
//     name: "Vidhi",
//     city: "Khurja",
//     bloodgroup: "AB+"
// }

// const student3 = {
//     name: "Ramlal",
//     city: "Agra",
//     bloodgroup: "B+"
// }

// const students = [student1, student2, student3]
// console.log(students[0])

//----------------------------------------------------------------------------------------------------

// const fruits = Array(["Mango", "Banana", "Kiwi", "Grapes"])
// console.log(fruits)
// console.log(typeof(fruits))
// console.log(Array.isArray(fruits))
// // console.log(Array.isArray(student3))


// -----------------------------------------------------------------------------------------------------

// const fruits = Array(["Mango", "Banana", "Kiwi", "Grapes"])
// console.log(fruits.length);

// const newfruit = prompt("Which fruit you want to add?")
// // fruits[4] = newfruit;
// fruits.push(newfruit)
// console.log(fruits.length);

// -----------------------------------------------------------------------------------------------------

const fruits = Array(["Mango", "Banana", "Kiwi", "Grapes"])

fruits[1] = "blueberry"
delete fruits[1]
console.log(fruits)

// SPLICE FROM MDM 