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
    if (this.state.show_persons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.delete_person_handler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            />
          })}
        </div>
      )
    }
    return (
      <div className='App'>
        <h1>Privet I am React App</h1>
        <p>This is really working!</p>
        <button
          onClick={this.toggle_persons_handler}>Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default App;
