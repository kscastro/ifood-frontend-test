import React, { Component } from "react";
import { Header } from "../../components/Header";
import { Container, Title, Button } from "./styles";

class Login extends Component {
  



  
  render() {
    return (
      <>
        <Header />
        <Container>
          <Title>SpotiFood</Title>
          <Button>Login</Button>
        </Container>
      </>
    );
  }
}

export default Login;
