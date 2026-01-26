import { useContext, useReducer, createContext, useState } from "react";

const favoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState({});
  return (
    <favoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </favoriteContext.Provider>
  );
}

export function useGlobalFavorite() {
  const { favorite, setFavorite } = useContext(favoriteContext);
  return { favorite, setFavorite };
}
