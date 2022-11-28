import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({})
 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      if (currentuser) {
        localStorage.setItem('currentuser', JSON.stringify(currentuser));
        setUser(currentuser);
      } else {
        localStorage.removeItem('currentuser');
        setUser(null);
      }
      // setUser(currentuser);
      // localStorage.setItem('currentuser', unsubscribe)

    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}