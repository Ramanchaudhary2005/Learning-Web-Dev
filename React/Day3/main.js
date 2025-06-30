import React from "./node_modules/react";
import ReactDom from "react-dom/client";

const domRoot = document.getElementById("root");
const reactRoot = ReactDom.createRoot(domRoot);
console.log(React);

const App = ()=>{
    return <div>
        <h1>Hello from React App</h1>
    </div>
}

reactRoot.render(App());