import './App.css';
import {useState} from 'react';

const Buttton = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

const  App = () => {
  const[counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  };

  const substraction = () => {
    setCounter(counter - 1);
  };

  return (
      <div className="App">
        <div className = "container">
          <div className = "child">
            <h1>Counter</h1>
            <h2>{counter}</h2>
          </div>
          <div className = "child">
            <Buttton onClick={substraction} text="-"></Buttton>
            <Buttton onClick={add} text="+"></Buttton>
          </div>
        </div>
      </div>
  );
}

export default App;
