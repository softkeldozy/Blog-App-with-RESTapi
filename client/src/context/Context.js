import { createContext, useReducer, useEffect } from 'react';
import Reducer from './Reducers';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

// A context provider to wrap things up
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user])
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        /******************************************************************
         According to our server we will DISPATCH either success or failure  
        *******************************************************************/
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};