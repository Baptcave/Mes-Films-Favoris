import { createContext, useContext, useState, useMemo } from "react";

type UserContextProviderProps = {
  children: JSX.Element | JSX.Element[];
};

type Default = {
  userId: null | undefined;
  setUserId: React.Dispatch<React.SetStateAction<undefined>>;
};

const defaultValue: Default = {
  userId: null,
  setUserId: () => {}
};

const UserContext = createContext(defaultValue);

export const useUserContext = () => useContext(UserContext);

function UserContextProvider({ children }: UserContextProviderProps) {
  const [userId, setUserId] = useState();

  const userMemo = useMemo(
    () => ({
      userId,
      setUserId
    }),
    [userId]
  );
  return <UserContext.Provider value={userMemo}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
