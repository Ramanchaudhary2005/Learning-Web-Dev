import {useState} from "react";


// whwnever object.is return false react will consideer it as value change

const App = ()=>{

    const [users, setUser] = useState([
        {
            username: "Raman",
            city: "Mumbai",
            email: "ramanch7890@gmail.com",
        },
    ]);

    console.log(users);

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