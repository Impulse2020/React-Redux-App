import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state({
      data: ""

    })

  }
  componentDidMount(){
    axios.get('http://localhost:3333/plants')
    .then(res => this.setState({ plants: res.data.plantsData, plantsFiltered: res.data.plantsData }))
    .catch(error => console.log(error))
  }



  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
