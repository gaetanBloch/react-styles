import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  margin: 20px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
      width: 450px;
  }
`;

const person = (props) => {
  const pStyle = {
    cursor: 'pointer'
  };

  return (
    <StyledDiv>
      <p onClick={props.click} style={pStyle}>I'm {props.name} and I am {props.age} years old!</p>
      <input type="text" onChange={props.nameChanged} defaultValue={props.name} />
    </StyledDiv>
  )
};

export default person;
