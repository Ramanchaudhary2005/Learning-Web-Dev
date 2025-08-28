const data = require('./data.json');
console.log(data);

const createProduct = (data)=>{
    fetch('http://localhost:3900/api/v1/products/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

const createProductmigration = async ()=>{
    const {products} = data;
    for(let i =0;i<products.length;i++){  
        await createProduct(products[i]);
        console.log(`Product ${i+1} created successfully`);
    }
}

createProductmigration();
