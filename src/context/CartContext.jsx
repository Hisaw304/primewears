import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("primewear-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("primewear-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  /* ==========================
     ADD TO CART
  ========================== */

  const addToCart = (product, size = "Default") => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existingItem) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id && item.size === size
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

      return;
    }

    const newItem = {
      ...product,
      size,
      quantity: 1,
    };

    setCartItems((prev) => [...prev, newItem]);
  };

  /* ==========================
     REMOVE ITEM
  ========================== */

  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  /* ==========================
     INCREASE QTY
  ========================== */

  const increaseQuantity = (id, size) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  /* ==========================
     DECREASE QTY
  ========================== */

  const decreaseQuantity = (id, size) => {
    setCartItems((prev) =>
      prev.flatMap((item) => {
        if (item.id === id && item.size === size) {
          if (item.quantity === 1) {
            return [];
          }

          return [
            {
              ...item,
              quantity: item.quantity - 1,
            },
          ];
        }

        return [item];
      })
    );
  };

  /* ==========================
     CLEAR CART
  ========================== */

  const clearCart = () => {
    setCartItems([]);
  };

  /* ==========================
     CART COUNT
  ========================== */

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  /* ==========================
     CART TOTAL
  ========================== */

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
