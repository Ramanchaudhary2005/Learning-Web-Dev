


const App = ()=>{
    const handleSearch=(e)=>{
        console.log(e.target.value);
    }
    return (
        <div>
            <input type="text" onKeyUp={handleSearch}/>
        </div>
    )
};



export default App;