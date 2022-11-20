import React, { useState, useEffect, createContext } from 'react';


const getSession = () => {
  const state = sessionStorage.getItem('session');
  return state;
}

const getUsers = () => {
  const users = sessionStorage.getItem('users');
  return users;
}

export const Context = createContext();

const getSessionState = getSession();
const initialSession = {
  cart: [],
  user: null
}

const getUsersState = getUsers();
const initialUsers = [{
  email: 'admin',
  password: 'admin',
  name: null,
  address: null,
  phone: null,
  gender: null,
  birthday: null,
  history: []
}];

const UserProvider = ({ children }) => {
  const [session, setSession] = useState( getSessionState ? JSON.parse(getSessionState) : initialSession);
  const [users, setUsers] = useState( getUsersState ? JSON.parse(getUsersState) : initialUsers);

  useEffect(() => {
    sessionStorage.setItem('session', JSON.stringify(session));
  }, [session]);

  useEffect(() => {
    sessionStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <Context.Provider value={[session, setSession, users, setUsers]}>
      {children}
    </Context.Provider>
  );
};

export default UserProvider;
