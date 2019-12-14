import React from 'react';
import styled from 'styled-components';
import './Person.css';

const StyleComponent = styled.div`

            width:60%;
            margin: 50px auto;
            border:1px solid black;
            box-shadow: 0 2px 3px rgb(136, 124, 124);
            padding: 50px;
            text-emphasis: center;
            text-align: center;
            border-radius:10%;
            font-weight: 700;
            height: 200px;

            background-color: blue;


            @media (min-width: 700px) {
                        margin: 0 auto;          
                        width:450px;
                        background-color:brown;

            }`;



const Person = (props) => { // recall that using arrow function hold a number of advantages!!! 


return (

    <StyleComponent>
 

        <p onClick = {props.clicked} > I'm {props.name} and I'm {props.age} years old!</p>
        {props.children}

        <input class ='Input' type= 'text' onChange={props.changed} value ={props.name}/>
  </StyleComponent>  


);
}

export default Person;