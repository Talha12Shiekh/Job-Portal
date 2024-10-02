import React, { useState } from "react";
import { FILTERS, getObject, GREY_COLOR, JOBS } from "../Constants";
import {
  Box,
  Container,
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import ScreenWrapper from "../Components/ScreenWrapper";
import CustomTypography from "../Components/CustomTypography";
import SingleJobCard, { WholeContainer } from "../Components/SingleJobCard";
import JobFilterSection from "../Components/JobFilterSection";
import useResponsivness from "../Hooks/useResponsivness";

const BrowseJobsScreen = () => {
  const [filters, setfilters] = useState(FILTERS.map((_) => ""));

  const [salaryselection, setsalaryselection] = useState([0, 0]);

  const [jobs, setjobs] = useState(JOBS);

  const [
    locationFilter,
    categoryFilter,
    experienceFilter,
    jobTypeFilter,
    qualificationFilter,
    genderFilter,
  ] = filters;

  function handleApplyFilters() {
    const filteredJobs = jobs.filter(({ filter, country, salary }) => {
      const checkingEmptyFilter = !!salaryselection[0] || !!salaryselection[1];
      const salaryFilter = (salaryselection[0] > salary[0] && salaryselection[1] <= salary[1]);
      const filteredSalary = checkingEmptyFilter ? salaryFilter : true;

      return (
        (locationFilter !== ""
          ? country.toLowerCase() === locationFilter.toLowerCase()
          : true) &&
        (categoryFilter !== ""
          ? filter.category.toLowerCase() === categoryFilter.toLowerCase()
          : true) &&
        (experienceFilter !== ""
          ? filter.experience.toLowerCase() === experienceFilter.toLowerCase()
          : true) &&
        (jobTypeFilter !== ""
          ? filter.jobType.toLowerCase() === jobTypeFilter.toLowerCase()
          : true) &&
        (qualificationFilter !== ""
          ? filter.qualification.toLowerCase() ===
          qualificationFilter.toLowerCase()
          : true) &&
        (genderFilter !== ""
          ? filter.gender.toLowerCase() === genderFilter.toLowerCase()
          : true) && filteredSalary
      );
    });
    setjobs(filteredJobs);
  }

  return (
    <Box bgcolor={GREY_COLOR} sx={{ py: 10 }}>
      <Container maxWidth="lg" component="main">
        <Grid container spacing={2}>
          <Grid size={{ lg: 3, xs: 12 }}>
            <Box bgcolor="white" p={3}>
              <JobFilterSection
                filters={filters}
                setfilters={setfilters}
                handleApplyFilters={handleApplyFilters}
                setjobs={setjobs}
                salary={salaryselection}
                setsalary={setsalaryselection}
              />
            </Box>
          </Grid>
          <Grid size={{ lg: 9, xs: 12 }}>
            <Box bgcolor="white" p={3}>
              <CustomTypography
                text="Job Listing"
                color="black"
                fontSize="1.5rem"
              />
            </Box>
            <Box>
              {jobs.map((job) => {
                const jobobject = getObject(job);
                return <SingleJobCard key={job.key} {...jobobject} />;
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BrowseJobsScreen;
