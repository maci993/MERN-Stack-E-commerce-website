import React, { useState, createContext, useEffect } from "react";
import all_products from "../assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  if (Array.isArray(all_products) && all_products.length > 0) {
    for (let index = 0; index < all_products.length; index++) {
      if (all_products[index] && all_products[index].id !== undefined) {
        cart[all_products[index].id] = 0;
      }
    }
  } else {
    console.warn("all_products is not defined or empty");
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      // console.log("Updated Cart Items after addToCart:", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      // console.log("Updated Cart Items after removeFromCart:", updatedCart);
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = all_products.find(
          (product) => product.id === Number(itemId)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item]

      }
    }
    return totalItem;
  }

  useEffect(() => {
    const totalAmount = getTotalCartAmount();
    console.log("Total Cart Amount on cartItems change:", getTotalCartAmount());
  }, [cartItems]);

  // console.log("All Products:", all_products);
  // console.log("Cart Items:", cartItems);
  // console.log("Calculated Total Amount:", getTotalCartAmount());

  const contextValue = {
    getTotalCartAmount,
    getTotalCartItems,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
