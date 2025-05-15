"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type ProductContextType = {
  setQuery: (query: string) => void;
  query: string;
};

const ProductQueryContext = createContext<ProductContextType>({
  query: "",
  setQuery: () => {},
});

export function ProductContextProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState<string>("");

  return (
    <ProductQueryContext.Provider value={{ setQuery, query }}>
      {children}
    </ProductQueryContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductQueryContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
}
