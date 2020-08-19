import React from 'react';

const auth_context = React.createContext({
  authenticated: false,
  login: () => {}
});

export default auth_context;
