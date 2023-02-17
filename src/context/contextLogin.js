import React, { createContext, useState,useEffect} from "react";

export const LoginContext = createContext();

function LoginContextProvider({ children }) {
  const [isPermission, setIsPermission] = useState(localStorage.getItem("isPermission"));
  console.log(isPermission);

  useEffect(() => {
    localStorage.setItem("isPermission", isPermission);
  }, [isPermission]);

  return (
    <LoginContext.Provider value={{ isPermission, setIsPermission }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
