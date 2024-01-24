import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cardImage from "../About/fer.jpg";

export default function AboutCard() {
  const { names, profile, city, state, email, info } = {
    names: "Maria Fernanda Guemez Medina",
    profile: "Desarrolladora Java Full Stack Jr.",
    city: "Mérida, Yucatán",
    email: "fernanda.guemez@gmail.com",
    info: "Apasionada de la naturaleza y del aprendizaje constante",
  };
  return (
    <Card className="card" sx={{ maxWidth: 300 }}>
      <CardMedia sx={{ height: 300 }} image={cardImage} title="green iguana" />
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
        <Typography variant="body2" color="text.secondary">
          {info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
