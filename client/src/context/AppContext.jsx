import { createContext } from "react";

// Create Context
const AppContext = createContext();

// Provider Component
export const AppProvider = (props) => {
    const value = { }

  return (
    <AppContext.Provider value={ value }>
      {props.children}
    </AppContext.Provider>
  );
};
