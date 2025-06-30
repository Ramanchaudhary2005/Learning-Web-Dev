// State management = Manage data in component
// creating stateful variables wity the help of react

const App = ()=>{
    let searchtext = "Hello"
    const handleSearch=(e)=>{
        const val = e.target.value;
        searchtext = val;
        console.log(searchtext);
    }
    return (
        <div>
            <input type="text" onKeyUp={handleSearch}/>
            <h2>{searchtext}</h2>
        </div>
    )
};



export default App;