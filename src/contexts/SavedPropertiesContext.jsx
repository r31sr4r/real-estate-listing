import React, { createContext, useContext, useState } from 'react';

const SavedPropertiesContext = createContext();

export const SavedPropertiesProvider = ({ children }) => {
  const [savedProperties, setSavedProperties] = useState([]);

  const toggleSaveProperty = (property) => {
    const isAlreadySaved = savedProperties.some((prop) => prop.Id === property.Id);
    if (isAlreadySaved) {
      setSavedProperties(savedProperties.filter((prop) => prop.Id !== property.Id));
    } else {
      setSavedProperties([...savedProperties, property]);
    }
  };

  return (
    <SavedPropertiesContext.Provider value={{ savedProperties, toggleSaveProperty }}>
      {children}
    </SavedPropertiesContext.Provider>
  );
};

export const useSavedProperties = () => useContext(SavedPropertiesContext);
