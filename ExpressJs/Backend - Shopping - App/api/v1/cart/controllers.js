const { cartModel } = require("../../../models/cartSchema.js");

const getCartItems = async (req, res) => {
  try {
    // Get the first cart document (assuming single cart for simplicity)
    let cart = await cartModel.findOne();
    // Remove populate until Product model is available
    // .populate('items.productId');
    
    if (!cart) {
      // Create a new cart if none exists
      cart = await cartModel.create({ items: [] });
    }
    
    res.status(200).json({ 
      success: true, 
      data: cart.items 
    });
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch cart items" 
    });
  }
};

const addCartItem = async (req, res) => {
  try {
    console.log('Request body:', req.body); // Debug log
    
    const { productId, name, price, quantity, thumbnail } = req.body;

    // Validate required fields
    if (!productId || !name || !price || !quantity) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    // Get or create cart
    let cart = await cartModel.findOne();
    if (!cart) {
      cart = await cartModel.create({ items: [] });
      console.log('Created new cart:', cart._id); // Debug log
    } else {
      console.log('Found existing cart:', cart._id); // Debug log
    }

    // Check if item already exists in cart
    const existingItemIndex = cart.items.findIndex(
      item => item.productId.toString() === productId
    );

    if (existingItemIndex > -1) {
      // Update existing item quantity
      console.log('Updating existing item at index:', existingItemIndex); // Debug log
      cart.items[existingItemIndex].quantity += parseInt(quantity);
    } else {
      // Add new item to cart
      console.log('Adding new item to cart'); // Debug log
      cart.items.push({
        productId,
        name,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        thumbnail: thumbnail || ""
      });
    }

    // Save updated cart
    const savedCart = await cart.save();
    console.log('Cart saved successfully, items count:', savedCart.items.length); // Debug log
    
    // Return cart items without population for now
    // Note: Remove populate until Product model is properly imported

    res.status(201).json({
      success: true,
      message: "Item added to cart successfully",
      data: savedCart.items,
      cartId: savedCart._id
    });
  } catch (error) {
    console.error('Error adding cart item:', error);
    res.status(500).json({
      success: false,
      message: "Failed to add cart item",
      error: error.message
    });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the cart
    let cart = await cartModel.findOne();
    if (!cart) {
      return res.status(404).json({ 
        success: false, 
        message: "Cart not found" 
      });
    }

    // Find and remove the item
    const initialLength = cart.items.length;
    cart.items = cart.items.filter(item => item._id.toString() !== id);

    if (cart.items.length === initialLength) {
      return res.status(404).json({ 
        success: false, 
        message: "Item not found in cart" 
      });
    }

    // Save updated cart
    await cart.save();
    
    // Remove populate until Product model is available
    // await cart.populate('items.productId');

    res.status(200).json({ 
      success: true, 
      message: "Item removed successfully", 
      data: cart.items 
    });
  } catch (error) {
    console.error('Error removing cart item:', error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to remove cart item" 
    });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Invalid quantity"
      });
    }

    // Find the cart
    let cart = await cartModel.findOne();
    if (!cart) {
      return res.status(404).json({ 
        success: false, 
        message: "Cart not found" 
      });
    }

    // Find and update the item
    const itemIndex = cart.items.findIndex(item => item._id.toString() === id);
    if (itemIndex === -1) {
      return res.status(404).json({ 
        success: false, 
        message: "Item not found in cart" 
      });
    }

    cart.items[itemIndex].quantity = parseInt(quantity);

    // Save updated cart
    await cart.save();
    
    // Remove populate until Product model is available
    // await cart.populate('items.productId');

    res.status(200).json({ 
      success: true, 
      message: "Item updated successfully", 
      data: cart.items 
    });
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to update cart item" 
    });
  }
};

module.exports = { 
  getCartItems, 
  addCartItem, 
  removeCartItem, 
  updateCartItem 
};