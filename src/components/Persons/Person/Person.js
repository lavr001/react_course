import React, {Component} from 'react';
import AuthContext from '../../../context/auth_context';
// import classes from './Person.module.scss';

class Person extends Component {

  constructor(props) {
    super(props);
    this.input_prop_ref = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.input_prop_ref.current.focus();
  }

  render() {
    console.log('[Person.js] is rendering...');
    return (

      // <div className={classes.Person} data-id={this.props.person_id}>
      <>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
          ref={this.input_prop_ref}
        />
      </>
      // </div>
    )
  }
};

export default Person;
