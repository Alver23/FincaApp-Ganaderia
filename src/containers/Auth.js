import React, { useEffect, useState } from "react";
import app from "../config/base";
import Loading from "../components/PageLoading";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  const isMounted = React.useRef(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (isMounted.current) {
        setCurrentUser(user);
        setPending(false);
      }
    });
  }, []);

  React.useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  if (pending) {
    return <>{<Loading />}</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
