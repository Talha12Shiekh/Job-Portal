import {
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CustomTypography from "./CustomTypography";
import { COUNTRIES, GREEN_COLOR, JOBS, searches } from "../Constants";
import useResponsivness from "../Hooks/useResponsivness";
import ScreenWrapper from "./ScreenWrapper";

const JobSearchSection = ({ setjobs }) => {
  const matches = useResponsivness("down", "lg");
  const [location, setlocation] = useState("India");
  const matchesSM = useResponsivness("down", "sm");

  const [value, setvalue] = useState("");

  function handleClickChip(search) {
    setvalue(search);
  }

  function handleChange(e) {
    setlocation(e.target.value);
  }

  function handleFilterJobs() {
    const filteredJobs = JOBS.filter((j) => {
      const checkingLocation = location
        ? j.country.toLowerCase() === location.toLowerCase()
        : true;
      const checkingKeyWord = value
        ? j.name.toLowerCase() === value.toLowerCase()
        : true;

      return checkingLocation && checkingKeyWord;
    });
    setjobs(filteredJobs);
  }

  return (
    <ScreenWrapper maxWidth="lg" bgcolor="" sx={{ p: matchesSM ? 2 : 10 }}>
      <Grid container spacing={3}>
        <Grid size={{ lg: 4, md: 4, xs: 12 }}>
          <TextField
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            fullWidth
            id="outlined-basic"
            label="Search Jobs"
            variant="outlined"
          />
        </Grid>
        <Grid size={{ lg: 4, md: 4, xs: 12 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Location"
              onChange={handleChange}
            >
              {COUNTRIES.map((elem) => {
                return (
                  <MenuItem key={elem} value={elem}>
                    {elem}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ lg: 4, xs: 12 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: GREEN_COLOR }}
            onClick={handleFilterJobs}
          >
            <CustomTypography text="Find Job" sx={{ p: 1 }} />
          </Button>
        </Grid>
      </Grid>
      <Box mt={5} display="flex" flexWrap={"wrap"} alignItems="center">
        <CustomTypography text="Popular Searches :" color="black" mr={2} />
        <Box display="flex" mt={matches ? 2 : 0} flexWrap="wrap">
          {searches.map((search) => {
            return (
              <Chip
                key={search}
                label={search}
                sx={{ fontSize: 15, mr: 1, mt: matches ? 2 : 0 }}
                variant="outlined"
                onClick={() => handleClickChip(search)}
              />
            );
          })}
        </Box>
      </Box>
    </ScreenWrapper>
  );
};

export default JobSearchSection;
