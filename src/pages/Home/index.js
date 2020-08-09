import React, { Component } from "react";
import { LOCAL_STORAGE_USER_KEY, URL_PLAYLIST } from "../../utils/constants";
import { Header } from "../../components/Header";
import { Container, ContainerSearch } from "./styles";
import { Card } from "../../components/Card";
import Input from "../../components/Input";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      playlists: "",
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
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

    if (playlists === undefined) {
      this.props.history.push("/login");
    }

    this.setState({ playlists: playlists });

  }

  render() {
    return (
      <>
        <Header />
        <ContainerSearch>
          <Input.Search onChange={this.handleChange} value={this.state.value} />
        </ContainerSearch>
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
