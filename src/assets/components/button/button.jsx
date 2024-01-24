import { Link } from "react-router-dom";
const Button = (props) => {
  console.log(props.id);
  return (
    <Link to={props.href}>
      <button>{props.name}</button>
    </Link>
  );
};

Button.defaultProps = {
  name: "Hola",
  href: "/",
};
export default Button;

// props para llamar la propiedad que le estamos enviando
// otr forma de acceder a props: le cambias a props por ({txt})
// y en el button solo le dejas {txt}
