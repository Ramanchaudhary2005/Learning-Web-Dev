// const student1 = {
//     name: "Raman",
//     age: "20",
//     dead: false,
//     girlfriend: yes,
// };

// console.log(student1);
// console.log(student1.name);

// const key = prompt("What is your college name");
// console.log("key:", key);
// const value = 

// student1[key] = value;


// const val1 = prompt("Do you want to change anything?");
// const val2 = prompt("what is the value for ${val1}");

// student1[val1] = val2;
// console.log(student1);

// const key = prompt("What do you want to know");
// console.log("key:",key);
// console.log(student1[key]);  // dynamic key

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// const student1 = {
//     name: "Raman",
//     age: "20",
//     dead: false,
//     girlfriend: "yes",
// };

// // delete student1.name;
// const k = prompt("what do you want to delete");
// delete student1[k];
// console.log(student1);

// ------------------------------------------------------------------------------------------------

const Raman = {
    name: "Raman Kumar",
    age: 21,
    isGraduated: false,
    information: function abcd() {
        console.log("-------");
        console.log(this.age);
    }
};

console.log("Raman:", Raman);
Raman.information();

