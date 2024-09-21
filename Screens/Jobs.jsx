import { Box, Container, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { getObject, GREEN_COLOR, GREY_COLOR, JOBS } from "../Constants";
import useResponsivness from "../Hooks/useResponsivness";
import CustomTypography from "../Components/CustomTypography";
import SingleJobCard from "../Components/SingleJobCard";
import ScreenWrapper from "../Components/ScreenWrapper";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const [bgfilled, setbgfilled] = useState(true);
  const matches = useResponsivness("down", "sm");

  const navigate = useNavigate();

  const handleBgChange = () => setbgfilled((p) => !p);
  return (
    <ScreenWrapper bgcolor={GREY_COLOR} sx={{py:5}}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant={matches ? "h5" : "h4"} className="poppins">
            Job Listing
          </Typography>
          <Button
            variant={bgfilled ? "outlined" : "contained"}
            color="success"
            sx={{ px: 4, py: 1.5 }}
            onClick={() => navigate("browsejobs")}
          >
            <CustomTypography
              text="Browse More Jobs"
              color={bgfilled ? GREEN_COLOR : "white"}
              fontSize="1rem"
              onMouseOver={handleBgChange}
              onMouseLeave={handleBgChange}

            />
          </Button>
        </Box>
        {JOBS.map((job) => {
          const jobobject = getObject(job)
          return <SingleJobCard key={job.key} {...jobobject} />
        })}
    </ScreenWrapper>
  );
};

export default Jobs;
