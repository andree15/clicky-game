import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from './characters.json';
import './App.css';


export default class App extends Component {
  return (
    <Wrapper>
      <h1 className="title">Characters List</h1>
      {characters.map = ((character) => (
        <CharacterCard
          image={character.image}
        />
      ))}
    </Wrapper>
  )
}

export default App;
