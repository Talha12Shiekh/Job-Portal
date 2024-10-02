import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomTypography from "./CustomTypography";
import { FILTERS, GREEN_COLOR, JOBS } from "../Constants";
import { GreenButton } from "../Screens/Home";

const JobFilterSection = ({handleApplyFilters,filters,setfilters,setjobs,salary,setsalary}) => {
  

  function handleChangeFilter(filtervalue, index) {
    setfilters((prev) => {
      const updatedFilters = [...prev];
      updatedFilters[index] = filtervalue;
      return updatedFilters;
    });
  }

  const handleChange = (event, newvalue) => {
    setsalary(newvalue);
  };


  function handleResetFilters() {
    setsalary([0,0]);
    setfilters(FILTERS.map((_) => ""));
    setjobs(JOBS)
  }
  return (
    <>
      <CustomTypography text="Filter" color="black" fontSize="1.5rem" mb={5} />
      {FILTERS.map(({ type, options }, index) => {
        return (
          <FormControl fullWidth sx={{ mb: 4 }}>
            <InputLabel id="demo-simple-select-label">{type}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filters[index]}
              label={type}
              onChange={(e) => handleChangeFilter(e.target.value, index)}
            >
              {options.map((op) => (
                <MenuItem value={op}>{op}</MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      })}
      <CustomTypography
        text="Price Range"
        color="black"
        fontSize="1.5rem"
        mb={2}
      />
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={salary}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
      <Typography variant="h6" color={"grey"} mb={4}>
        {salary[0]}$ - {salary[1]}$
      </Typography>
      <GreenButton fullWidth text="Apply" onClick={handleApplyFilters} />
      <GreenButton color="red" fullWidth text="Reset" onClick={handleResetFilters} />
    </>
  );
};

export default JobFilterSection;
