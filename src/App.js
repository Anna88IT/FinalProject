import './App.css';
import React, {useState} from 'react';
import { LeftSideBar } from './components/LeftSideBar';
import { RightSideBar } from './components/RightSideBar';

function App() {

  const [temp, setTemp] = useState(true);

  const handleChangeTemp = () => {
    setTemp(!temp);
  }

  return (
    <div className="App">
      <LeftSideBar temp = {temp} />
      <RightSideBar handleChangeTemp = {handleChangeTemp} />
    </div>
  );
}

export default App;
