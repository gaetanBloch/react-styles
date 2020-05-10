import React from 'react';
import Radium from 'radium';
import './Person.css'

const person = (props) => {
  const pStyle = {
    cursor: 'pointer'
  };

  const divStyle = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }

  return (
    <div className="Person" style={divStyle}>
      <p onClick={props.click} style={pStyle}>I'm {props.name} and I am {props.age} years old!</p>
      <input type="text" onChange={props.nameChanged} defaultValue={props.name}/>
    </div>
  )
};

export default Radium(person);
