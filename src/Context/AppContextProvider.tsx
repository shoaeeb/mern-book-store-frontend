import { BookType } from "@/types/types";
import React from "react";

export type Items = {
  book: BookType;
  quantity: number;
};

type Props = {
  children: React.ReactNode;
};
type AppContextType = {
  cartItems: Items[];
  addToCart: (cartItems: Items) => void;
};

const AppContext = React.createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = React.useState<Items[]>([]);

  const addToCart = (newCartItemss: Items) => {
    const existingItem = cartItems.find(
      (item) => item.book._id === newCartItemss.book._id
    );
    if (existingItem) {
      const updatedCart = cartItems.map((item) => {
        if (item.book._id === newCartItemss.book._id) {
          return {
            ...item,
            quantity: item.quantity + newCartItemss.quantity,
          };
        }
        return item;
      });
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, newCartItemss]);
    }
  };
  return (
    <AppContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
