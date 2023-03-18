// Export a plain function that's why lower case filename is used

import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext(null);

  const Provider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addNote: (dispatch) => { return () => {} } }
    const boundActions = {};
    for (let key in actions ) {
     // key === 'addNote'
      boundActions[key] = actions[key](dispatch)
    }

    return <Context.Provider value={{ state, ...boundActions }}>
      {children}
    </Context.Provider>;
  };

  return { Context, Provider };
};
