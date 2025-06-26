const userInput = prompt("What is your name");
const userInput1 = prompt("What is your age");

console.log("userInput", userInput);
console.log("userInput", userInput1);

if(userInput1>18){
    console.log("Yes, you can give vote");
}else{
    console.log("Sorry, You can't");
}