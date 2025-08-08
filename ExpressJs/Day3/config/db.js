const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL,
    {
        dbName: "day-4-express",
    }
).then(()=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log("Error", err.message);
});