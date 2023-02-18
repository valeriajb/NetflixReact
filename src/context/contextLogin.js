import React, { createContext, useState,useEffect} from "react";
import { json } from "react-router-dom";

export const LoginContext = createContext();

function LoginContextProvider({ children }) {
  const [isPermission, setIsPermission] = useState(JSON.parse(localStorage.getItem("isPermission")));
  console.log(isPermission);

  useEffect(() => {
    JSON.stringify(localStorage.setItem("isPermission", isPermission));
  }, [isPermission]);

  return (
    <LoginContext.Provider value={{ isPermission, setIsPermission }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
