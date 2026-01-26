import { useContext, useReducer, createContext, useState } from "react";

const menuContext = createContext();

export function MenuProvider({ children }) {
  const [page, setPage] = useState("people");
  return (
    <menuContext.Provider value={{ page, setPage }}>
      {children}
    </menuContext.Provider>
  );
}

export function useGlobalMenu() {
  const { page, setPage } = useContext(menuContext);
  return { page, setPage };
}
