// navigation/NavigationContext.js
import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [currentRoute, setCurrentRoute] = useState('/');

  const navigate = (route) => {
    setCurrentRoute(route);
  };

  return (
    <NavigationContext.Provider value={{ navigate, currentRoute }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
