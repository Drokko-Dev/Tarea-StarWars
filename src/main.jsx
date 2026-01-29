import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MenuProvider } from "./hooks/useGlobalMenu.jsx";
import { FavoriteProvider } from "./hooks/useGlobalFavorite.jsx";
import "./index.css";
import App from "./App.jsx";
import "./styles/sidebar.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoriteProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </FavoriteProvider>
  </StrictMode>,
);
