import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from './characters.json';
import './App.css';

class App extends Component {

  state = {
    characters,
    score: 0,
    highscore: 0,
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      })
    }
    this.state.characters.forEach(character => {
      character.count = 0;
    });
    alert(`Game Over:( | score: ${this.state.score}`);
    this.setState({score:0});
    return true;
  }

  clickCount = id => {
    this.state.characters.find((o, i) => {
      if (o.id === id) {
        if(characters[i].count === 0){
          characters[i].count = characters[i].count + 1;
          this.setState({score : this.state.score + 1}, function() {
            console.log(this.state.score)
          });
          this.state.characters.sort(() => Math.random() - 0.5)
          return true;
        }
        else{
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header score = {this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.characters.map(character => (
          <Card
            clickCount={this.clickCount}
            id={character.id}
            key={character.id}
            image={character.image}
            />
        ))}
      </Wrapper>
    );
  }
}

export default App;
