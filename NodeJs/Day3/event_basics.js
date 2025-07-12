const EventEmitter = require("node:events");
const myEmitter = new EventEmitter();

myEmitter.on("hello",()=>{
    console.log("hi");
});

myEmitter.on("where", ()=>{
    console.log("delhi");
});

myEmitter.on("buy", (productId)=>{
    console.log("Product is added to cart", productId);
});

myEmitter.emit("buy","123");