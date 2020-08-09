import React, { Component } from "react";
import { Container, Title, Button } from "./styles";
import hash from "../../utils/index";
import { URL_AUTH, CLIENT_ID, URL_REDIRECT, LOCAL_STORAGE_USER_KEY } from "../../utils/constants";

class Login extends Component {
  

  componentDidMount() {
    let token = hash.access_token;

    if (token) {
      window.localStorage.setItem(LOCAL_STORAGE_USER_KEY, token);
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <>
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
