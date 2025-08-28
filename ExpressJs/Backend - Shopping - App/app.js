require("dotenv").config();
require("./config/db");
const express = require("express");
const morgan = require("morgan");
const { apiRouter } = require("./api/v1/routes");  
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3900;
const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.use((req,res,next)=>{
    setTimeout(()=>{
        next();
    }, 1000);
});

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1", apiRouter);
app.use(cookieParser());

app.listen(PORT, () => {
    console.log("-----------server started---------------");
});

