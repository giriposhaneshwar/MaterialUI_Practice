import React, { Component } from 'react';
import Hello from './Hello';
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

        <Routes>
          <Route path="/" element={<Hello name={this.state.name} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
