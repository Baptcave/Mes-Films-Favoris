import { createContext, useContext, useState, useMemo } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

function UserContextProvider({ children }) {
    
    const [userId, setUserId] = useState();

    const userMemo = useMemo(
      () => ({
        userId,
        setUserId,
      }),
      [userId]
    );
    return (
      <UserContext.Provider value={userMemo}>
        {children}
      </UserContext.Provider>
    );
  }
  
  export default UserContextProvider;