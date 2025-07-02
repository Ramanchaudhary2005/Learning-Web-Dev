import {useState} from "react";

const App = ()=>{
    const[name, setName] = useState("");
    const[city, setCity] = useState("");
    const[email, setEmail] = useState("");

    return(
        <div>
            <div>
                <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}/>
            </div>
            <div>
                <input type="text" onChange={(e)=>{setCity(e.target.value)}} value={city}/>
            </div>
            <div>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            </div>
            <div>
                <h3>{name}</h3>
                <h3>{city}</h3>
                <h3>{email}</h3>
            </div>
        </div>
    );
    
};

export default App;