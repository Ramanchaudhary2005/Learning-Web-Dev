// ----PROMISES-----
window.console.log("hello", new Date())

const successCallback = (data) =>{
    console.log("Success", new Date(), data);
    const pr2 = data.json();
    pr2.then((finalData) =>{
        console.log(finalData)
    })
}

const failureCallback = (data) =>{
    console.log("Erorr", new Date(), data);
    alert("Network error")
}

const pr = fetch('https://dummyjson.com/recipes')
pr.then(successCallback).catch(failureCallback);
console.log(pr);