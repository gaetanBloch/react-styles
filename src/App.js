import React, { Component } from 'react';

import './App.css'
import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoudary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Gaëtan', age: 31},
      {id: 2, name: 'Patrick', age: 30},
      {id: 3, name: 'Sandra', age: 32}
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({persons: persons})
  };

  render() {
    let btnClasses = [styles.button];

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                nameChanged={(event) => this.changeNameHandler(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      );

      btnClasses.push(styles.red);
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!!!</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className={btnClasses.join(' ')} onClick={() => this.togglePersonsHandler()}>
          Toggle Show Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
