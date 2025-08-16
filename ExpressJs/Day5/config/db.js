const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL,
    {
        dbName: "dummy-shopping-app-v1",
    }
).then(()=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log("Error", err.message);
});