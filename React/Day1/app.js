// const domroot = document.getElementById("root")
// const newlistcontainer = document.createElement("ul");

// domroot.appendChild(newlistcontainer)

// const listitems = document.createElement('li')
// newlistcontainer.appendChild(listitems)
// listitems.innerText = "Item1"


// -------------------------------------------------------------------------------------
const domroot = document.getElementById("root"); // real dom
const reactroot = ReactDOM.createRoot(domroot); // virtual dom

const item1 = React.createElement("li",{
    className: "fancy-text"
},"item-1");
const item2 = React.createElement("li",{},"item-2");
const listcontainer = React.createElement("ul",{}, item1, item2);

reactroot.render(listcontainer);