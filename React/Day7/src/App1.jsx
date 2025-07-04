// import { request } from "express"

const App=()=>{
    const getData=()=>{
        const request = fetch("https://dummyjson.com/recipes");
        request
               .then((response)=>{
                    const pr = response.json();
                    pr.then((data)=>{
                        console.log(data);
                    })
               })
               .catch((err)=>{
                    alert(`Api error: ${err.message}`);
               })
    };
    getData();
    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default App;