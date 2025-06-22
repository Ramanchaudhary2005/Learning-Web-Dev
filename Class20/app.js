// ----PROMISES-----
// window.console.log("hello", new Date())

// const successCallback = (data) =>{
//     console.log("Success", new Date(), data);
//     const pr2 = data.json();
//     pr2.then((finalData) =>{
//         console.log(finalData)
//     })
// }

// const failureCallback = (data) =>{
//     console.log("Erorr", new Date(), data);
//     alert("Network error")
// }

// const pr = fetch('https://dummyjson.com/recipes')
// pr.then(successCallback).catch(failureCallback);
// console.log(pr);
console.log("Start")
const pr = new Promise((res, rej)=>{
    console.log("Promise resolving")
    setTimeout(()=>{
        res({
        name: "Raman",
        city: "Delhi",
    });
    }, 5000);
});

console.log("Mid");

pr.then((data) =>{
    console.log("Done", data);
}).catch((err)=>{
    console.log("error", err);
})

console.log("End")