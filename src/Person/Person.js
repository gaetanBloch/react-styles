import React from 'react';
import './Person.css'

const person = (props) => {
  const style = {
    cursor: 'pointer'
  }

  return (
    <div className="Person">
      <p onClick={props.click} style={style}>I'm {props.name} and I am {props.age} years old!</p>
      <input type="text" onChange={props.nameChanged} defaultValue={props.name}/>
    </div>
  )
};

export default person;
