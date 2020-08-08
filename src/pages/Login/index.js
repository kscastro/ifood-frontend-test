import React, { Component } from "react";
import { Header } from "../../components/Header";
import { Container, Title, Button } from "./styles";
import hash from "../../utils/index";
import { URL_AUTH, CLIENT_ID, URL_REDIRECT } from "../../utils/constants";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
    };
  }

  componentDidMount() {
    let token = hash.access_token;

    if (token) {
      window.localStorage.setItem("ACCESS_TOKEN_STORAGE_KEY", token)
      this.props.history.push("/home")
    }
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Title>SpotiFood</Title>
          <Button
            href={`${URL_AUTH}?client_id=${CLIENT_ID}&redirect_uri=${URL_REDIRECT}&response_type=token&show_dialog=true`}
          >
            Login
          </Button>
        </Container>
      </>
    );
  }
}

export default Login;
