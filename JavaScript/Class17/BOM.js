console.log(window.document)

// const text=window.prompt("What is your name")
// console.log(text)

// ----- DOM -----

console.dir(window.document.body)

const headingelement = window.document.body.children[1].children[1].children[0];
headingelement.innerHTML = "Document Object Model";

// ----- METHODS ------

//1. GET ELEMNT BY TAG NAME

const headings = document.getElementsByTagName("h2");
console.log(headings)
const secondheading = headings[1];
secondheading.innerText = "Hello from Dom";

//2. GET elemnt by classname

const elemnt = document.getElementsByClassName("text-brown")
console.log(elemnt)
// const firstelement = elemnt[1]
// firstelement.style.backgroundColor = "brown"

setTimeout(()=>{
    for (let elem of elemnt){
        elem.style.color = "brown";
    }
}, 5000);


// --------- CREATE A ELEMENT -------------


