import { useReducer, createContext, useContext } from 'react';
import { AuthReducer, initialState } from './authReducer';

const AuthStateContext = createContext();
const AuthDispatcherContext = createContext();

export function useAuthState() {
  return useContext(AuthStateContext);
}

export function useAuthDispatch() {
  return useContext(AuthDispatcherContext);
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatcherContext.Provider value={dispatch}>
        {children}
      </AuthDispatcherContext.Provider>
    </AuthStateContext.Provider>
  );
};
