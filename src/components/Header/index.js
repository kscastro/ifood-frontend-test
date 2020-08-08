import React from "react";
import { Container, Logo } from "./styles";
import logo from "../../assets/logo.png"

export const Header = ({ src }) => (
  <React.Fragment>
    <Container>
      <Logo alt="logo" src={logo} />
    </Container>
  </React.Fragment>
);
