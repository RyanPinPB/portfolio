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
  const [siteVisited, setSiteVisisted] = useState(false);

  function siteWasVisited() {
    setSiteVisisted(true);
  }

  return (
    <GlobalStateContext.Provider value={siteVisited}>
      <GlobalStateUpdateContext.Provider value={siteWasVisited}>
        {children}
      </GlobalStateUpdateContext.Provider>
    </GlobalStateContext.Provider>
  );
}
