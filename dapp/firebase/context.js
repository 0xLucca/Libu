import React from 'react';
import { createContext, useState } from 'react';

export const CreatorContext = createContext({});

export const CreatorProvider = ({ children }) => {
  const context = {};

  return (
    <CreatorContext.Provider value={context}>
      {children}
    </CreatorContext.Provider>
  );
};
