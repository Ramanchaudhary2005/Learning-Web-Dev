import React from "./node_modules/react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main"
const domRoot = document.getElementById("root");
const reactRoot = ReactDom.createRoot(domRoot);
console.log(React);







const App = ()=>{
    return <div>
        <Header/>
        <Main></Main>
        <Footer/>
    </div>
}

reactRoot.render(App());