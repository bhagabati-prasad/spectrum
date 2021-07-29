import { useState, createContext } from 'react';

export const UserContext = createContext({});

const UserContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
