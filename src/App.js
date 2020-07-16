import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Components/Content.jsx'


class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Content />
        </div>
      </Router>
    );
  }
}

export default App;
