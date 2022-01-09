//@ts-check
import React, { useReducer } from "react";
const initialAppState = { tales: [], stories: [] };
const AppContext = React.createContext({
  state: initialAppState,
  dispatch: (state, action) => {},
});

/**
 *
 * @param {object} state
 * @param {object} action
 * @param {string} action.type
 * @param {*} action.payload
 * @returns
 */
function appReducer(state, action) {
  let newState;
  switch (action.type) {
    case "SET_TALES":
      newState = { ...state, tales: action.payload };
      break;
    case "SET_STORIES":
      newState = { ...state, stories: action.payload };
      break;
    default:
      throw new Error(`Unknown Action: ${action.type}`);
  }
  return newState;
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialAppState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
