import React, {Component} from 'react';
import './App.scss';
import Person from './Person/Person';
import NavbarTab from './Navbar/NavbarTab';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Roman', age: 28},
      {id: 2, name: 'Kosha', age: 26},
      {id: 3, name: 'Nika', age: 4}
    ],
    show_persons: false,
    tabs: ['one', 'two', 'three']
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

  tab_click = event => {
    event.target.parentNode.parentNode.querySelectorAll('.tab').forEach(tab => tab.classList.remove('on'));
    event.target.parentNode.classList.add('on');
  }

  render() {
    let persons = null;
    let button_style = {};

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

    let tabs = (
      <div>
        {this.state.tabs.map(tab => {
          return <NavbarTab
            tab_name={tab}
            key={tab}
            clicked={(event) => this.tab_click(event)}
          />
        })}
      </div>
    )

    let classes = [];

    if (this.state.persons.length <= 2) classes.push('tomato');
    if (this.state.persons.length <= 1) classes.push('bold');

    return (
      <div className='App'>
        <aside>
          {tabs}
        </aside>
        <main>
          <h1>Burger React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button style={button_style}
            onClick={this.toggle_persons_handler}>Toggle Persons
          </button>
          {persons}
        </main>
      </div>
    )
  }
}

export default App;
