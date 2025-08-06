const { v4: uuidv4} = require("uuid");

const PRODUCTS_FILE_PATH = './products.json';

const saveProduct = async ()=>{
    const products = await myReadFile(PRODUCTS_FILE_PATH);
    data.id = uuidv4();
    products.push(data);
    mySaveFile(PRODUCTS_FILE_PATH, products);
}

const readProduct = async ()=>{
    const products = await myReadFile(PRODUCTS_FILE_PATH);
    return products;
}

module.exports = {saveProduct, readProduct};