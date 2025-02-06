import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    full_name: "",
    phone_number: "",
    birthday: "",
    country: "",
    gender: "",
  });

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
