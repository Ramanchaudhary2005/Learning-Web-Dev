const title = document.getElementById("greetings");


const handleusername = (e)=>{
    const inputelement = e.target;
    const val = inputelement.value;
    title.innerText = `Hello ${val}`;

}

// When form submit it trigger
const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = e.target;
    const nameinput = inputs[0];
    console.log("name",nameinput.value);
    const eamilinput = inputs[1];
    console.log("email",eamilinput.value);
    const passwordinput = inputs[2];
    console.log("password",passwordinput.value);
    const collegeinput = inputs[3];
    console.log("collegename",collegeinput.value);
    // You can use nameinput.value if needed

    if(passwordinput.value.length<8){
        alert("Please use strong password");
        return;
    }

    const emailregex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    if(!emailregex.test(eamilinput.value)){
        alert("Please use valid email");
        return;
    }  
    window.open("./thankyou.html", "_self")
}