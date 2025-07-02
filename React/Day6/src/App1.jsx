import {useState} from "react";

const App = () =>{
    const [text, setText] = useState(()=>{
        const val = localStorage.getItem("my-text");
        if(val){
            return val;
        }
        else{
            return "Hello-world";
        }
    });

    const handleChange=(e)=>{
        const val = e.target.value;
        setText(val);
        localStorage.setItem("my-text", val);
    }
    return(
        <div>
            <input type="text" onChange={handleChange} value={text}/>
            <p>{text}</p>
        </div>
    );
};

export default App;