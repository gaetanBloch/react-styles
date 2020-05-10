import React from 'react';

import styles from './Person.module.css'

const person = (props) => {
  const pStyle = {
    cursor: 'pointer'
  };

  return (
    <div className={styles.Person}>
      <p onClick={props.click} style={pStyle}>I'm {props.name} and I am {props.age} years old!</p>
      <input type="text" onChange={props.nameChanged} defaultValue={props.name} />
    </div>
  )
};

export default person;
