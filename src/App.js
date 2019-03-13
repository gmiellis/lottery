import React, { Component } from 'react';
import './App.css';
import Odometer from "react-odometerjs";

import "odometer/themes/odometer-theme-slot-machine.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      arr: [0,0,0,0,0,0],
      odometerValue: 0

    };
    this.handleGenerateNumbers = this.handleGenerateNumbers.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleGenerateNumbers() {
    const newArr = [];
    const copyArr = this.state.arr;
    
    copyArr.forEach(entry => {
      
      
      let newNumber = Math.floor(Math.random() * 46) + 1;

      newArr.includes(newNumber) ? 
        newNumber = Math.floor(Math.random() * 46) + 1 :
        newNumber = newNumber;

      newArr.push(newNumber);
      newArr.sort((a, b) => a - b);

      this.setState({
        arr: newArr,
      });
    });
    console.log(newArr)

  }

  handleReset() {
    this.setState({
      arr: [0,0,0,0,0,0]
    })
  }
  
  render() {
    const { odometerValue } = this.state;
    return (

      <div className="App">

        <h1>Lottery Numbers<br/>Generator</h1>
        <h3>Press<br/>the<br/>button</h3>

        <button onClick={this.handleGenerateNumbers}>Generate Numbers</button>
        <button onClick={this.handleReset}>Reset</button>
        
        <div>
          {/* <p> */}
            {/* {
              this.state.arr.map((number, index) => {
                return <span key={index}> {number} </span>
              })
            } */}
            {
              this.state.arr.map((number, index) => {
                return <span>
                         <Odometer
                            key={index}
                            format="dd" 
                            duration={1000} 
                            value={number} />
                      </span> 
              })
            }
          {/* </p> */}
        </div>
       
      </div>
    );
  }
}

export default App;
