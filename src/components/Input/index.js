import React, { Component } from "react";
import { InputSearch } from "./styles";

export default class Input extends Component {
  static Search = ({ value, onChange }) => (
    <React.Fragment>
      <InputSearch
        type="text"
        onChange={onChange}
        value={value}
        placeholder={"Buscar"}
      />
    </React.Fragment>
  );
}
