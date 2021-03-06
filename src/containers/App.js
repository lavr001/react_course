import React, {Component} from 'react';
import './App.scss';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth_context';
// import NavbarTab from './Navbar/NavbarTab';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js constructor]');
  }

  state = {
    persons: [
      {id: 1, name: 'Roman', age: 28},
      {id: 2, name: 'Kosha', age: 26},
      {id: 3, name: 'Nika', age: 4}
    ],
    show_persons: false,
    tabs: ['one', 'two', 'three'],
    counter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    this.setState((prevState, props) => {
      return  {
        persons: updated_names_persons,
        counter: prevState.counter + 1
      }
    });
  }

  delete_person_handler = person_index => {
    const updated_persons = [...this.state.persons];
    updated_persons.splice(person_index, 1);
    this.setState({persons: updated_persons});
  }

  toggle_persons_handler = () => {
    this.setState({show_persons: !this.state.show_persons})
  }

  login_handler = () => {
    this.setState({ authenticated: true })
  }

  // tab_click = event => {
  //   event.target.parentNode.parentNode.querySelectorAll('.tab').forEach(tab => tab.classList.remove('on'));
  //   event.target.parentNode.classList.add('on');
  // }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.show_persons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.delete_person_handler}
          changed={this.name_change_handler}
        />
      )
    }

    // let tabs = (
    //   <div>
    //     {this.state.tabs.map(tab => {
    //       return <NavbarTab
    //         tab_name={tab}
    //         key={tab}
    //         clicked={(event) => this.tab_click(event)}
    //       />
    //     })}
    //   </div>
    // )

    return (
      <div className='App'>
        {/*<aside>
          {tabs}
        </aside>*/}
        <main>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.login_handler
          }} >
            <Cockpit
              title={this.props.title}
              show_persons={this.state.show_persons}
              persons={this.state.persons}
              clicked={this.toggle_persons_handler}
            />
            {persons}
          </AuthContext.Provider>
        </main>
      </div>
    )
  }
}

export default App;
