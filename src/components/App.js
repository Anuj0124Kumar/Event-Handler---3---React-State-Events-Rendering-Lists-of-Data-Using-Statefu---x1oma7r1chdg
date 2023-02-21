import React from 'react'
import '../styles/App.css';
const App = () => {

  // const handleInput = (event) =>{
  //    event.target.value;
  //    console.log(event.target.value);
  // }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor="text-input">Text Input:- </label>
      <input
        id="text-input"
        type="text"
        onChange={(e) => {
          console.log(
            "Input in #" + event.target.id + " is " + event.target.value
          );
        }}
      />

      <br />
      <br />

      <label htmlFor="num-input">Number input</label>
      <input
        id="num-input"
        type="number"
        onChange={(e) => {
          console.log(
            "Input in #" + event.target.id + " is " + event.target.value
          );
        }}
      />
      <br />
    </div>
  );
};



export default App;
