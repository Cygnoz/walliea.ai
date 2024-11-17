import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
type RegistrationContextType = {
  isRegistered: boolean;
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create a context with default values (initially not registered)
const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

// Create a provider component to wrap your app
export const RegistrationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState<boolean>(localStorage.getItem('isRegistered') === 'true');

  return (
    <RegistrationContext.Provider value={{ isRegistered, setIsRegistered }}>
      {children}
    </RegistrationContext.Provider>
  );
};

// Custom hook to use the context
export const useRegistration = (): RegistrationContextType => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};
