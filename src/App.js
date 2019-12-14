import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';



const StyledButton = styled.button`

border: 1px solid blue;
color: black;
background-color: green;
padding: 8px;
width: 150px;
margin: 30px;
font: inherit;
cursor:help;
&:hover {
  background-color:purple;
  color:black;
}

`;


class App extends Component {

// Original State 

  state = {
    person: [

      { id: 'abc', name: 'Daniel', age: '29' },
      { id: 'bcd', name: 'Jess', age: '31' },
      { id: 'cde', name: 'Christin', age: '32' } // remember that dynamic data need to be wrapped in curly braces!! 

    ],
    otherState: 'this is just random words',
    showPerson: false,

    
  
  };



// List of Handlers 

  nameChangeHandler = (event,id) => {

    const personIndex = this.state.person.findIndex( p=> {  // personIndex equals data referencing an index in our person object that matches the id of hat same element. 
      return p.id === id  

    }
      ); 


    const person = {  // this person container hold data referencing a copy of our persons objects with the corresponding incoming index indicating or 'person'

      ...this.state.person[personIndex]

    }


    person.name = event.target.value ;


    const persons = [...this.state.person];

    persons[personIndex] = person; 


  

 // so far i've created a property that references by handler method which is taking two pieces of information including 1 ) event 2 ) id  
 // I've also create a handler call nameChangeHandler which will change the name for the component that matches the corresponding index. 
 //  






    this.setState({

      person: persons
    })


  }


  toggleNameHandler = () => { // this handler has displays our components or hides them depending on a binary state following a users click 

    const doesShow = this.state.showPerson;  // here we've assigned our binary data to a container called 'doesShow'.
  
    this.setState({showPerson: !doesShow}); // now we update the showPerson portion of our state to equal the opposite of the current state.



  }


  deleteNameHandler = (PersonIndex) => { // I created a handler to listen for a click where it will then delete that component by referencing their index 

    const person = [...this.state.person] ; // <=== updating state immutably w/ the spread operator

    person.splice(PersonIndex,1); // here we spliced out 1 element from our array 
    this.setState({person:person}); // we then update` the state


  }

 

  render( ) {


   




    // Conditional Content 

    let persons = null; // our default value for is set to nothing or null. Meaning by default nothing will be displayed.

    if (this.state.showPerson) { // this conditional will display our Person components if the showPerson properties value is set to true.

      persons = (
      <div>

        {this.state.person.map((person,index) => {
          return <Person 
          
          changed = {(event)=> this.nameChangeHandler(event, person.id)}
          clicked = {() => this.deleteNameHandler(index)} // here we've created an anonymous function to return our 'deleteNameHandler' method with an index input 
          name = {person.name} 
          age = {person.age}
          key={person.id}

          
          />
        }
         )}

      </div>

       );


  

  

    }

    // conditional for toggle button

      if (this.state.showPerson === true) {

        this.state.button_text = 'Hide'
     
      } 
      
      else {
        this.state.button_text = 'Reveal';
      }


  // styling components dynamically with class names 

const classes = []; // start value @ 0 

if(this.state.person.length <=2){
  classes.push('red');
}
if(this.state.person.length <=1){
  classes.push('bold');
}
if(this.state.person.length <=0){
  classes.push('max');
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
<p className={classes.join(' ')}> This is really working</p>
    <StyledButton onClick={this.toggleNameHandler}>{this.state.button_text}></StyledButton>


       {persons}




      </div>
     
    );
  }
};
export default App;