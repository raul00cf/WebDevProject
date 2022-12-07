import React, { useState, useEffect, createContext } from 'react';


const getSession = () => {
  const state = sessionStorage.getItem('session');
  return state;
}

export const Context = createContext();

const getSessionState = getSession();
const initialSession = {
  cart: [],
  user: null
}

const UserProvider = ({ children }) => {
  const [session, setSession] = useState( getSessionState ? JSON.parse(getSessionState) : initialSession);

  useEffect(() => {
    sessionStorage.setItem('session', JSON.stringify(session));
  }, [session]);

  return (
    <Context.Provider value={[session, setSession]}>
      {children}
    </Context.Provider>
  );
};

export default UserProvider;
