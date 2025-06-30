import React from "./node_modules/react";
import ReactDom from "react-dom/client";

const domRoot = document.getElementById("root");
const reactRoot = ReactDom.createRoot(domRoot);
console.log(React);

const Header = () =>{
    return<div>
        <a>Home</a>
        <a>Search</a>
        <a>Help</a>
    </div>
}

const Main = () =>{
    return<main>
        <section><h1>Title 1</h1><p>This is the dummy text</p></section>
        <section><h1>Title 2</h1><p>This is the dummy text</p></section>
        
    </main>
}

const App = ()=>{
    return <div>
        <Header/>
        <Main></Main>
    </div>
}

reactRoot.render(App());