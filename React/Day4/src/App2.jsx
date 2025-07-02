// State management = Manage data in component
// creating stateful variables wity the help of react
import {useState} from 'react';
const App = ()=>{
    const [monitor,remote] = useState(0);
    const inputvalue=()=>{
        // const val = e++;
        remote(monitor+1);
    }
    const decreasevalue=()=>{
        remote(monitor-1);
    }
    return(
        <div>
            <h1>{monitor}</h1>
            <button onClick={inputvalue}>Increase</button>
            <button onClick={decreasevalue}>Decrease</button>
        </div>
    );
    

};



export default App;