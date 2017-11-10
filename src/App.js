import React, { Component } from 'react';
import Quiz from './quiz'
import QuizOptions from './QuizOptions'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <h2>Let's play Number Game!!</h2>
        </div>
          <Quiz/>
      </div>
    );
  }
}

export default App;
