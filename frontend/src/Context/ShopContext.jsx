import React, { useState, createContext } from "react";
import all_products from "../assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart); 
  const [totalAmount, setTotalAmount] = useState(0);

// const addToCart = (itemId) => {
//   setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
//   console.log(cartItems);
// }

// const removeFromCart = (itemId) => {
//   setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
// }
const addToCart = (itemId) => {
  setCartItems((prev) => {
    const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
    console.log("Updated Cart Items after addToCart:", updatedCart); // Debugging
    return updatedCart;
  });
};

const removeFromCart = (itemId) => {
  setCartItems((prev) => {
    const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
    console.log("Updated Cart Items after removeFromCart:", updatedCart); // Debugging
    return updatedCart;
  });
};

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
if (cartItems[item] > 0) {
  let itemInfo = all_products.find((product) => product.id === Number (item));
  if (itemInfo) {
    // totalAmount += itemInfo.new_price * cartItems[item];
    const itemTotal = itemInfo.new_price * cartItems[item];
    totalAmount += itemTotal;
    console.log(`Item ID ${item}, Price: ${itemInfo.new_price}, Quantity: ${cartItems[item]}, Item Total: ${itemTotal}`);
  }
}
console.log("Total Cart Amount:", totalAmount); 
return totalAmount;
  }

}

const contextValue = { getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
