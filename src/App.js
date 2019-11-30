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
    otherState: 'this is just random words'

  };
 
  

  switchNameHandler = (newName) => { // 


    this.setState ({

      person: [
        { name: newName, age: '30' },
        { name: 'jeffrey', age: '32' },
        { name: 'Christin', age: '33' }
      ]
    })
    

  }

  nameChangeHandler = (event) => {

    this.setState ({

      person: [
        { name: 'Daniel', age: '30' },
        { name: event.target.value, age: '32' },
        { name: 'Christin', age: '33' }
      ]
    })
  

  }



       

        render(){
          const style = {
            border: '1px solid blue', 
            color:'red',
            backgroundColor:'#cee',
            padding:'8px',
            width:'150px', 
            margin:'30px',
            font:'inherit',

           


          }

            return (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Daniel's React Project</h1>
                </header>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                    </p>

                <button style={style}onClick={this.toggleNameHandler}>Switch Button</button>


                <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>

                <Person name={this.state.person[1].name} age={this.state.person[1].age } 

                click={this.switchNameHandler.bind(this,'Dan The Man')}
                changed={this.nameChangeHandler} ></Person>

                <Person name={this.state.person[2].name} age={this.state.person[2].age} 
                click={this.switchNameHandler.bind(this,'Danny')}></Person>
              </div>

            );
        }
};
export default App;