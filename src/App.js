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
  switch_name_handler = () => {
    this.setState({
      persons: [
        {name: 'Alex', age: 28},
        {name: 'Kosha', age: 26},
        {name: 'Nika', age: 6}
      ]
    })
  }
  render() {
    return (
      <div className='App'>
      <h1>Privet I am React App</h1>
      <p>This is really working!</p>
      <button onClick={this.switch_name_handler}>Switch Name</button>
      <Person
      name={this.state.persons[0].name}
      age={this.state.persons[0].age}>My hobby is Soccer
      </Person>
      <Person
      name={this.state.persons[1].name}
      age={this.state.persons[1].age}
      />
      <Person
      name={this.state.persons[2].name}
      age={this.state.persons[2].age}
      />
      </div>
    )
  }
}

// state = {
//   persons: [
//     {name: 'Roman', age: 28},
//     {name: 'Kosha', age: 26},
//     {name: 'Nika', age: 4}
//   ]
// }

// switch_name_handler = () => {
//   this.setState({
//     persons: [
//       {name: 'Alex', age: 28},
//       {name: 'Kosha', age: 26},
//       {name: 'Nika', age: 6}
//     ]
//   })
// }

export default App;
