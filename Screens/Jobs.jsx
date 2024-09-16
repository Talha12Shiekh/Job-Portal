import { Box, Container, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { GREEN_COLOR, GREY_COLOR, JOBS } from "../Constants";
import useResponsivness from "../Hooks/useResponsivness";
import CustomTypography from "../Components/CustomTypography";
import SingleJobCard from "../Components/SingleJobCard";

const Jobs = () => {
  const [bgfilled, setbgfilled] = useState(true);
  const matches = useResponsivness("down", "sm");

  const handleBgChange = () => setbgfilled((p) => !p);
  return (
    <Box py={5} width="100%" bgcolor={GREY_COLOR}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant={matches ? "h5" : "h4"} className="poppins">
            Job Listing
          </Typography>
          <Button
            variant={bgfilled ? "outlined" : "contained"}
            color="success"
            sx={{ px: 4, py: 1.5 }}
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
          const {
            name,
            location,
            country,
            img,
            description,
            responsibility,
            qualifications,
            benefits,
            salary,
            vacancy,
            publishedOn,
            key
          } = job;
          const jobobject = {
            name,
            location,
            country,
            img,
            description,
            responsibility,
            qualifications,
            benefits,
            salary,
            vacancy,
            publishedOn,
          }
          return <SingleJobCard key={key} {...jobobject} />;
        })}
      </Container>
    </Box>
  );
};

export default Jobs;
