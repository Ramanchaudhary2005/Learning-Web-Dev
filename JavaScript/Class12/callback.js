console.log("Today about callbacks");

// const print = (txt) => {
//     console.log("->",txt);
// };

// const add = (a,b)=>{
//     const ans = a+b;
//     return ans;
// }

// const divide = (a,b)=>{
//     const ans = a/b;
//     return ans;
// }

// const result = add(20,30);
// const finalresult = divide(result,10);
// print(finalresult);


const print = (txt) => {
    console.log("->",txt);
};

const add = (a,b,z)=>{
    const ans = a+b;
    z(ans, 1.18);
}

const divide = (a,b)=>{
    const ans = a/b;
    console.log(ans);
}

const result = add(20,30,divide);
//const finalresult = divide(result,10);
print(result);