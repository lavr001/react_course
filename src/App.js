import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Roman', age: 28},
      {id: 2, name: 'Kosha', age: 26},
      {id: 3, name: 'Nika', age: 4}
    ],
    show_persons: false
  } 

  name_change_handler = (event, id) => {
    //Find the index of the person whose name was changes
    const person_index = this.state.persons.findIndex(person => person.id === id);
    //Keep state data immutable, make a copy of a person whose name was changed
    const person_name_changed = {
      ...this.state.persons[person_index]
    }
    //Update person's name with the value from input
    person_name_changed.name = event.target.value;
    //Make a copy of the person's array to keep state immutable
    const updated_names_persons = [...this.state.persons];
    //Update person with a name changed in the copied array
    updated_names_persons[person_index] = person_name_changed;
    //Update state persons array with a new copied array
    this.setState({
      persons: updated_names_persons
    })

  }

  delete_person_handler = person_index => {
    const updated_persons = [...this.state.persons];
    updated_persons.splice(person_index, 1);
    this.setState({persons: updated_persons});
  }

  toggle_persons_handler = () => {
    this.setState({show_persons: !this.state.show_persons})
  }
  render() {
    let persons = null;
    let button_style = {
      backgroundColor: '#5cd35c',
      color: '#fff',
      border: '1px solid #eee',
      padding: '10px',
      cursor: 'pointer',
      fontSize: '16px',
      outline: 'none',
      borderRadius: '50px',
      boxShadow: '0 2px 3px #ccc',
      transition: 'all .2s ease-in-out',
    }
    if (this.state.show_persons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.delete_person_handler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            person_id={person.id}
            changed={(event) => this.name_change_handler(event, person.id)}
            />
          })}
        </div>
      )
      button_style.backgroundColor = 'tomato';
    }

    let classes = [];

    if (this.state.persons.length <= 2) classes.push('tomato');
    if (this.state.persons.length <= 1) classes.push('bold');

    return (
      <div className='App'>
        <h1>Privet I am React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={button_style}
          onClick={this.toggle_persons_handler}>Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default App;
