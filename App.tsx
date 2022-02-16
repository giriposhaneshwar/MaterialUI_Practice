import React, { Component } from 'react';
import { Button } from './components/Button';
import { Routes, Route, Link } from 'react-router-dom';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <p>Start editing to see some magic happen :)</p>
        <Button text={this.state.name} />
      </div>
    );
  }
}

export default App;
