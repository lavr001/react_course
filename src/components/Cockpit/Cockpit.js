import React from 'react';

const cockpit = (props) => {
  let assigned_classes = [];
  let button_style = {};

  if (props.show_persons) button_style.backgroundColor = 'tomato';
  if (props.persons.length <= 2) assigned_classes.push('tomato');
  if (props.persons.length <= 1) assigned_classes.push('bold');

  return (
    <div className="cockpit">
      <h1>Burger React App</h1>
      <p className={assigned_classes.join(' ')}>This is really working!</p>
      <button
        style={button_style}
        onClick={props.clicked}>Toggle Persons
      </button>
    </div>
  )
};

export default cockpit;
