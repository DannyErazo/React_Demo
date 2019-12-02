import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [

      { name: 'Daniel', age: '29' },
      { name: 'Jess', age: '31' },
      { name: 'Christin', age: '32' } // remember that dynamic data need to be wrapped in curly braces!! 

    ],
    otherState: 'this is just random words',
    showPerson: false,

    
  
  };



  switchNameHandler = (newName) => { // 


    this.setState({

      person: [
        { name: newName, age: '30' },
        { name: 'jeffrey', age: '32' },
        { name: 'Christin', age: '33' }
      ]
    })


  }

  nameChangeHandler = (event) => {

    this.setState({

      person: [
        { name: 'Daniel', age: '30' },
        { name: event.target.value, age: '32' },
        { name: 'Christin', age: '33' }
      ]
    })


  }

  toggleNameHandler = () => {

    const doesShow = this.state.showPerson; 
  
    this.setState({showPerson: !doesShow, button_text : 'Hide'}); 



  }


  deleteNameHandler = (PersonIndex) => {
    const person = this.state.person ;

    person.splice(PersonIndex,1); 
    this.setState({person:person});


  }



  render() {
    const style = {
      border: '1px solid blue',
      color: 'red',
      backgroundColor: '#cee',
      padding: '8px',
      width: '150px',
      margin: '30px',
      font: 'inherit',
    }

    let persons = null;

    if (this.state.showPerson) {

      persons = (

      <div>

        {this.state.person.map((person,index) => {
          return <Person 
          
          clicked = {() => this.deleteNameHandler(index)}
          name = {person.name} 
          age = {person.age}/>
        }
          )}


    
      </div>



       );
    }


      if (this.state.showPerson === true) {

        this.state.button_text = 'Hide'
      } else {
        this.state.button_text = 'Reveal';
      }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Daniel's React Project</h1>
        </header>
        <p className="App-intro">
          To  get started, edit <code>src/App.js</code> and save to reload.
                    </p>

    <button style={style} onClick={this.toggleNameHandler}>{this.state.button_text}</button>



       {persons}




      </div>

    );
  }
};
export default App;