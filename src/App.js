import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

const app = () => {
  const mensaje = "Hola como estas ?";

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={mensaje} mensaje="Que buscas ?" />
    </>
  );
};
export default app;
