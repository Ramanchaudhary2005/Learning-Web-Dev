const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ramanch7890:94106100168077890222@cluster0.wdllekb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log("Error", err.message);
})