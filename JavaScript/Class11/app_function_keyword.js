console.log("Start");

// Functions

function getStudentScore(){
    const test1 = 45;
    const test2 = 55;
    console.log(test1+test2)
}
let name1 = "Raman";
let name2 = "Vidhi";
// getStudentScore(); //Function Calling

function StudentScore(name, score1, score2){
    console.log("Hello", name);
    console.log("Your score is", score1+score2);
}

StudentScore(name1,50,50);
StudentScore(name2,49,50);
console.log("End");
