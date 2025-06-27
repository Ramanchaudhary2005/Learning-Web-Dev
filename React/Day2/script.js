const domroot = document.getElementById("root");
const reactroot = ReactDOM.createRoot(domroot);



// const title = {
//     $$typeof: Symbol.for('react.element'),
//     ref: null,
//     key: null,
//     type: 'h1',
//     props:{
//         children: "Title",
//     }
// };

// const para = {
//     $$typeof: Symbol.for('react.element'),
//     ref: null,
//     key: null,
//     type: 'p',
//     props:{
//         children: "Description",
//     }
// };

// const container = {
//     $$typeof: Symbol.for('react.element'),
//     ref: null,
//     key: null,
//     type: 'div',
//     props:{
//         children: [para, title],
//     }
// }; 

// reactroot.render(container); // react root have

// ---------------------------------------------------------------------

const heading = React.createElement('h1',{}, "title");
const para = React.createElement('p',{},"Description1");
const conatiner = React.createElement('div',{},[heading,para ]);

reactroot.render(conatiner);