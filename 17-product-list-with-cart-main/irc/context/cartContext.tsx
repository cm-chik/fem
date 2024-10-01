import type { Product, CartItem } from "@/interfaces";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<{
  cartItems: CartItem[];
  totalCartItems: number;
  totalCartItemsPrice: number;
  isItemInCart: (item: Product) => boolean;
  getCartQuantity: (item: Product) => number;
  removeFromCart: (item: CartItem) => void;
  decreaseQuantity: (item: Product) => void;
  increaseQuantity: (item: Product) => void;
  getCartItemByProduct: (item: Product) => CartItem | null;
}>({
  cartItems: [],
  totalCartItems: 0,
  totalCartItemsPrice: 0,
  isItemInCart: () => false,
  getCartQuantity: () => 0,
  removeFromCart: () => {},
  decreaseQuantity: () => {},
  increaseQuantity: () => {},
  getCartItemByProduct: () => ({}) as CartItem,
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const totalCartItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalCartItemsPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const decreaseQuantity = (item: Product) => {
    setCartItems((prevItems) => {
      const cartItem = getCartItemByProduct(item);
      if (cartItem && cartItem.quantity > 1) {
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else if (cartItem) {
        return prevItems.filter((cartItem) => cartItem.name !== item.name);
      }
      return prevItems;
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const increaseQuantity = (item: Product) => {
    setCartItems((prevItems) => {
      const cartItem = getCartItemByProduct(item);
      if (cartItem) {
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [
          ...prevItems,
          { ...item, image: item.image.thumbnail, quantity: 1 },
        ];
      }
      return prevItems;
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const getCartItemByProduct = (item: Product) => {
    const foundItem = cartItems.find((cartItem) => cartItem.name === item.name);
    return foundItem ? foundItem : null;
  };

  const isItemInCart = (item: Product) => {
    return (
      cartItems.findIndex((cartItem) => cartItem.name === item.name) !== -1
    );
  };
  const getCartQuantity = (item: Product) => {
    return (
      cartItems.find((cartItem) => cartItem.name === item.name)?.quantity || 0
    );
  };

  const removeFromCart = (item: CartItem) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.name !== item.name
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    } else {
      setCartItems([]);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalCartItems,
        totalCartItemsPrice,
        isItemInCart,
        getCartQuantity,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        getCartItemByProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("UseCartContext must be used with CartProvider");
  }
  return context;
};
