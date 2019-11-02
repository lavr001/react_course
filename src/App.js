import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Roman', age: 28},
      {name: 'Kosha', age: 26},
      {name: 'Nika', age: 4}
    ]
  }
  switch_name_handler = new_name => {
    this.setState({
      persons: [
        {name: new_name, age: 28},
        {name: 'Kosha', age: 26},
        {name: 'Nika', age: 6}
      ]
    })
  }
  change_name_handler = event => {
    this.setState({
      persons: [
        {name: 'Roman', age: 28},
        {name: event.target.value, age: 26},
        {name: 'Nika', age: 6}
      ]
    })
  }
  render() {
    return (
      <div className='App'>
      <h1>Privet I am React App</h1>
      <p>This is really working!</p>
      <button
        onClick={() => this.switch_name_handler('Vladimir')}>Switch Name
      </button>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}>My hobby is Soccer
      </Person>
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switch_name_handler.bind(this, 'Ivan')}
        changed={this.change_name_handler}
      />
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
      />
      </div>
    )
  }
}

export default App;
