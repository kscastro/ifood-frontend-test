import React, { Component } from "react";
import { LOCAL_STORAGE_USER_KEY, URL_PLAYLIST } from "../../utils/constants";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Card } from "../../components/Card";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      playlists: "",
    };
  }

  async componentDidMount() {
    const token = window.localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if (!token) {
      this.props.history.push("/login");
    }

    const playlists = await fetch(URL_PLAYLIST, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => data.playlists)
      .catch((erro) => console.error(erro));

     
      if(playlists === undefined){
        this.props.history.push("/login")
      }

    this.setState({ playlists: playlists });
  }

  render() {
    return (
      <>
        {console.log(this.state.playlists)}
        <Header />
        <Container>
          {this.state.playlists
            ? this.state.playlists.items.map((playlist) => (
                <Card
                  key={playlist.id}
                  image={playlist.images[0].url}
                  title={playlist.name}
                />
              ))
            : undefined}
        </Container>
      </>
    );
  }
}

export default Home;
