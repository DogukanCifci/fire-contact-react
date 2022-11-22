import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ userAdd }}>{children}</AuthContext.Provider>
  );
};
export default AuthContextProvider;
