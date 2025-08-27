const placeOrderController = (req,res)=>{
    
    const { productId, quantity } = req.body;

    
    if (!productId || !quantity) {
        return res.status(400).json({ error: "Invalid order data" });
    }

    
    const orderId = Date.now(); 
    console.log(`Order placed: ${orderId}`, { productId, quantity });

    
    return res.status(201).json({ message: "Order placed successfully", orderId });
}
module.exports = { placeOrderController };