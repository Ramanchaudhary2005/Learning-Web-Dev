// const arr = ["Tata", "Mahindra", "hyundai"];
// // arr[3] = "honda";
// arr.push("Honda");
// console.log(arr);

const arr = {
    name: "Raman",
    age: 19,
}

const arr2 = {...arr}; // Now the name of arr2 changes only not both
arr2.name = "Vidhi"

// console.log(arr);
// console.log(arr2)

const arry = [
    {
        name: "Raman",
        location: "Khurja"
    },
    {
        name: "Vidhi",
        location: "Khurja",
    }
]

const myfun = (a) =>{
    console.log(a);
}

const ans = arry.find(myfun);