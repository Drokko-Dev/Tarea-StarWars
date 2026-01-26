import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Menu } from "./components/Menu";
import "./App.css";
import { Category } from "./components/Category";

function App() {
  return (
    <>
      <Navbar />
      <Menu />
      <Category />
    </>
  );
}

export default App;
