import { createContext, useState } from "react";

import MEMBER_DATA from "../member_data.json";

export const MembersContext = createContext({
  members: [],
});

export const MembersProvider = ({ children }) => {
    const [members, setMembers] = useState(MEMBER_DATA);
    const value = { members };
  return (
    <MembersContext.Provider value={value}>
      {children}
    </MembersContext.Provider>
  );
};
