import React, { useState, createRef } from 'react';
import Btn from './components/Button';
import { Routes, Route, Link } from 'react-router-dom';

interface AppProps {}
interface AppState {
  name: string;
}

let c = 0;

const App = (props: any) => {
  const container = createRef();
  const [name, setName] = useState('React');
  const [count, setCount] = useState(0);

  const handleBtnClick = () => {
    container.current.innerHTML = c++;
  };
  return (
    <div>
      <p ref={container}>Start editing to see some magic happen :)</p>
      <Btn text={name} handleClick={handleBtnClick} />
    </div>
  );
};

export default App;
