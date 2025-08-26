let cart = []; // This should be replaced with DB calls

const getCartItems = (req, res) => {
  try {
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch cart items" });
  }
};

const addCartItem = (req, res) => {
  try {
    const { productId, name, price, quantity, thumbnail } = req.body;

    // Validate required fields
    if (!productId || !name || !price || !quantity) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required fields" 
      });
    }

    // Check if item already exists in cart
    const existing = cart.find((item) => item.productId === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ 
        id: Date.now().toString(), 
        productId, 
        name, 
        price, 
        quantity, 
        thumbnail: thumbnail || "" // store image URL (optional if not provided)
      });
    }

    res.status(201).json({ 
      success: true, 
      message: "Item added to cart", 
      data: cart 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Failed to add cart item" 
    });
  }
};


const removeCartItem = (req, res) => {
  try {
    const { id } = req.params;
    const index = cart.findIndex((item) => item.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: "Item not found in cart" });
    }

    cart.splice(index, 1);

    res.status(200).json({ success: true, message: "Item removed", data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to remove cart item" });
  }
};

module.exports = { getCartItems, addCartItem, removeCartItem };
