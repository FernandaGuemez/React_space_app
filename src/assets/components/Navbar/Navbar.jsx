import Button from "../button/button";
import "./Navbar.css";

const Navbar = ({ links }) => {
  return (
    <div className="nav-container">
      <div className="navbar">
        {links.map((link) => (
          <Button key={link.id} {...link} /> // lo que está en la llave se llama operador Spread
        ))}
      </div>
    </div>
  );
};

export default Navbar;
