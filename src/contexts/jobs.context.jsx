import { createContext, useState } from "react";

import MEMBER_DATA from "../job_data.json";

export const JobsContext = createContext({
  jobs: [],
});

export const JobsProvider = ({ children }) => {
    const [jobs, setJobs] = useState(MEMBER_DATA);
    const value = { jobs };
  return (
    <JobsContext.Provider value={value}>
      {children}
    </JobsContext.Provider>
  );
};
