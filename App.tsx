import React, { useState } from 'react';
import Btn from './components/Button';
import { Routes, Route, Link } from 'react-router-dom';

interface AppProps {}
interface AppState {
  name: string;
}

const App = (props: any) => {
  const [name, setName] = useState('React');

  const handleBtnClick = () => {
    alert(1);
  };
  return (
    <div>
      <p>Start editing to see some magic happen :)</p>
      <Btn text={name} handleClick={handleBtnClick} />
    </div>
  );
};

export default App;
