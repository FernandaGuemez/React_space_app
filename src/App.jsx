import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import Button from "./assets/components/button/button.jsx";
import Navbar from "./assets/components/Navbar/Navbar.jsx";
import Astros from "./assets/components/Astros/Astros.jsx";
import BottonNav from "./assets/components/BottonNav/BottonNav.jsx";
import "./App.css";

function App() {
  const btnText = "Login";

  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Astros", href: "/astros" },
  ];

  return (
    <>
      <Navbar links={links} />
      <Routes>
        <Route path="/" element={<Button name={btnText} />} />
        <Route path="/about" element={<BottonNav />} />
        <Route path="/astros" element={<Astros />} />
      </Routes>
    </>
  );
}

export default App;
