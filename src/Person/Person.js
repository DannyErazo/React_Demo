import React from 'react';
import './Person.css';


const Person = (props) => { // recall that using arrow function hold a number of advantages!!! 

return (
    <div class = 'Person'>

        <p onClick = {props.click} > I'm {props.name} and I'm {props.age} years old!</p>
        {props.children}

        <input class ='Input' type= 'text' onChange={props.changed} value ={props.name}/>
    </div>  







);
}

export default Person;