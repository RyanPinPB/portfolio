import React, { useState, useContext } from 'react';

const GlobalStateContext = React.createContext();
const GlobalStateUpdateContext = React.createContext();

export function useGlobalState() {
  return useContext(GlobalStateContext);
}

export function useGlobalStateUpdate() {
  return useContext(GlobalStateUpdateContext);
}

export function GlobalStateProvider({ children }) {
  // const [darkTheme, setDarkTheme] = useState(true);
  const [homeVisited, setHomeVisisted] = useState(false);

  // function toggleTheme() {
  //   setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  // }

  function homeWasVisited() {
    setHomeVisisted(true);
  }

  return (
    <GlobalStateContext.Provider value={homeVisited}>
      <GlobalStateUpdateContext.Provider value={homeWasVisited}>
        {children}
      </GlobalStateUpdateContext.Provider>
    </GlobalStateContext.Provider>
  );
}
