import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cardImage from "../About/fer.jpg";

export default function AboutCard() {
  const { names, profile, city, state, email } = {
    names: "Maria Fernanda Guemez Medina",
    profile: "Desarrolladora Java Full Stack Jr.",
    city: "Mérida, Yucatán",
    email: "fernanda.guemez@gmail.com",
  };
  return (
    <Card className="card" sx={{ maxWidth: 400 }}>
      <CardMedia sx={{ height: 400 }} image={cardImage} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {names}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {profile}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {city}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {email}
        </Typography>
        <div>
          <p>
            Apasionada de la naturaleza y del aprendizaje constante. Actualmente
            me estoy formando como Desarrolladora Java Full Stack en Generation
            México. Adicionalmente soy Ingeniera ambiental con 10 años de
            experiencia en gestión de proyectos, liderazgo, resolución de
            problemas, pensamiento crítico, comunicación efectiva y trabajo en
            equipo.
          </p>
        </div>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          target="_blank"
          href="https://github.com/FernandaGuemez"
        >
          GitHub
        </Button>
        <Button
          size="small"
          target="_blank"
          href="https://www.linkedin.com/in/maria-fernanda-g%C3%BC%C3%A9mez-medina-568140291/"
        >
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  );
}
