import React, {Component} from 'react';
import classes from './Person.module.scss';

class Person extends Component {
  render() {
    console.log('[Person.js] is rendering...');
    return (
      <div className={classes.Person} data-id={this.props.person_id}>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.changed} value={this.props.name}/>
      </div>
    )
  }
};

export default Person;
