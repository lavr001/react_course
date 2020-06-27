import React from 'react';

const navbar_tab = props => {
  if (props.tab_name === 'one') {
    return (
      <div className='tab on' onClick={props.clicked}>
        <div className='box_tab'>{props.tab_name}</div>
      </div>
    )
  } else {
    return (
      <div className='tab' onClick={props.clicked}>
        <div className='box_tab'>{props.tab_name}</div>
        <div className='dropdown'>
          <div className='sub_tab'>Subtab One</div>
          <div className='sub_tab'>Subtab Two</div>
          <div className='sub_tab'>Subtab Three</div>
        </div>
      </div>
    )
  }
}

export default navbar_tab;
