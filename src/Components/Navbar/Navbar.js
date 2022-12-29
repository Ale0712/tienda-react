import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="tienda online" />
      <h1>Tienda Los Lobos</h1>
      <nav>
        <a href="">Tienda</a>
        <a href="">Imagenes</a>
        <a href="">Nosotros</a>
        <a href="">Contacto</a>
      </nav>
      <ShoppingCartIcon color="primary" fontSize="large" />;
    </header>
  );
};

export default Navbar;
