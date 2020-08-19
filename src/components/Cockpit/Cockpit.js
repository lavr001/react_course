import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth_context';

const Cockpit = props => {

  const toggle_button_ref = useRef();
  const auth_context = useContext(AuthContext);

  console.log(auth_context);

  useEffect(() => {
    console.log('useEffect [Cockpit.js]');
    toggle_button_ref.current.click();
    // setTimeout(() => {
    //   alert('Saved Data')
    // }, 1000);
  }, []);

  //use [] when you need to useEffect ONCE on the initial load

  let assigned_classes = [];
  let button_style = {};

  if (props.show_persons) button_style.backgroundColor = 'tomato';
  if (props.persons.length <= 2) assigned_classes.push('tomato');
  if (props.persons.length <= 1) assigned_classes.push('bold');

  return (
    <div className="cockpit">
      <h1>{props.title}</h1>
      <p className={assigned_classes.join(' ')}>This is really working!</p>
      <button
        ref={toggle_button_ref}
        style={button_style}
        onClick={props.clicked}>Toggle Persons
      </button>
      <button onClick={auth_context.login}>Log in</button>
    </div>
  )
};

export default Cockpit;
