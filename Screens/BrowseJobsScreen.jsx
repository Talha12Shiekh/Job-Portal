import React, { useState } from "react";
import { GREY_COLOR } from "../Constants";
import { Box, Container, FormControl, Grid2 as Grid, InputLabel, MenuItem, Select } from "@mui/material";
import ScreenWrapper from "../Components/ScreenWrapper";
import CustomTypography from "../Components/CustomTypography";

const BrowseJobsScreen = () => {
    const [jobtype, setjobtype] = useState('');

    function handleChange(e){
        setjobtype(e.target.value)
    }

  return (
    <ScreenWrapper bgcolor={GREY_COLOR} sx={{ p: 10 }}>
      <Grid container spacing={2}>
        <Grid sx={{ bgcolor: "white" }} size={{ lg: 3 }}>
          <h1>xs=6 md=8</h1>
        </Grid>
        <Grid sx={{ bgcolor: "white", p: 3}} size={{ lg: 9 }}>
          <Box>
            <CustomTypography
              text="Job Listing"
              color="black"
              fontSize="1.5rem"
            />
          </Box>
        </Grid>
      </Grid>
    </ScreenWrapper>
  );
};

export default BrowseJobsScreen;
