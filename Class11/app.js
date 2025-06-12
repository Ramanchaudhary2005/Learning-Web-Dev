// console.log(country);
// var country = "India"; // countary: undefined

// console.log(city);
// let city = "Delhi"; // city it is not accessible before initialization

let city = function calculatesum(a,b){
    console.log(a+b);
}

city(10,20);

let city1 = (a,b) => {
    console.log(a+b);
}

city1(20,20);


let percentageOfMarks = (a,b,c,d,e)=>{
    console.log(((a+b+c+d+e)/500)*100);
}

percentageOfMarks(80,88,89,87,82);