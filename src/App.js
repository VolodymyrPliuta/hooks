import React, { Component, useState } from 'react';
import './App.css';
import { ThemeContext, LocaleContext } from './context'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3> Greetings witn class component</h3>
        <Greetings />
        <h3> Greetings witn functional component</h3>
        <GreetFunc />
      </div>
    );
  }
}

// state with class component
class Greetings extends Component{
  constructor(props) {
    super(props) 
    this.state = {
      name: 'John',
      surname: 'Northland'
    }
  }

   handleNameChange = (e) => {
     this.setState({
       name: e.target.value 
     }) 
   }

  handleSurnameChange = (e) => {
    this.setState({
      surname: e.target.value 
    }) 
  }

  render() {
    return(
      <section>
        <p>name</p>
        <input 
          value = {this.state.name}
          onChange = {this.handleNameChange}
        >
        </input>
        <input 
          value = {this.state.surname}
          onChange = {this.handleSurnameChange}
        >
        </input>
      </section>
    ) 
  }
}

// state with functional component(using hooks)
const GreetFunc = () => {
  const [name, setName] = useState('Mike');
  const [surname, setSurname] = useState('Bender');

  const handleNameChange = (e) => {
     setName(e.target.value) 
   }

  const handleSurnameChange = (e) => {
     setSurname(e.target.value) 
   }

  return(
    <section>
      <input
        value={name} 
        onChange={handleNameChange}
      >
      </input> 
      <input
        value={surname} 
        onChange={handleSurnameChange}
      >
      </input> 
    </section> 
  )
}

export default App;
