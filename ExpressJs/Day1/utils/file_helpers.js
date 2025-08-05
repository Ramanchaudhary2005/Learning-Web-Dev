const fsPromises = require("fs/promises");

const myReadFile = (filepath) => {
    try{
        fsPromises.readFile(filepath, "utf-8");
        return JSON.parse(data);
    }
    catch(err){
        console.log("Error reading the file -->", err.message);
        return [];
    }
};

const mySaveFile = async (filepath,data)=>{
    try{
        const str = JSON.stringify(data);
        await fsPromises.writeFile(filepath, str);
    }
    catch{
        console.log("Error saving file", err.message);
    }
}

module.exports = {myReadFile, mySaveFile};