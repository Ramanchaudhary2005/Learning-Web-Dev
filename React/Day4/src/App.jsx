// State management = Manage data in component
// creating stateful variables wity the help of react
import {useState} from 'react';
const App = ()=>{
    // let searchtext = "Hello"
    const [monitor,remote] = useState();
    const handleSearch=(e)=>{
        const val = e.target.value;
        // searchtext = val;
        // console.log(searchtext);
        remote(val);
    }
    return (
        <div>
            <input type="text" onKeyUp={handleSearch}/>
            <h2>{monitor}</h2>
        </div>
    )
};



export default App;