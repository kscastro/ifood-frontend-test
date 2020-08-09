import React from "react";
import { Container, Image, Title } from "./styles";

export const Card = ({ image, title}) => (
  <Container>
    <Image src={image} />
    <Title>{title}</Title>
  </Container>
);
