import React, { useState } from "react";
import JobSearchSection from "./JobSearchSection";
import Jobs from "../Screens/Jobs";
import { JOBS } from "../Constants";

const JobsSearchandViewSection = () => {
  const [jobs, setjobs] = useState(JOBS);
  return (
    <>
      <JobSearchSection
      setjobs={setjobs}
      />
      <Jobs jobs={jobs} />
    </>
  );
};

export default JobsSearchandViewSection;
