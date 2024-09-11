import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { GREEN_COLOR, GREY_COLOR } from "../Constants";
import bgImage from "../public/background1.webp";
import CustomTypography from "./CustomTypography";
import useResponsivness from "../Hooks/useResponsivness";

const ReusableJobExpertSection = ({heading,description,btnText}) => {
    const checkingLG = useResponsivness("down","lg")
    return <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection={"column"}
    gap={3}
  >
    <Typography variant={checkingLG ? "h4":"h3"} className="poppins" color="white">
      {heading}
    </Typography>
    <CustomTypography
      text={description}
      textAlign="center"
    />
    <Button variant="outlined" sx={{ bgcolor: GREEN_COLOR }}>
      <CustomTypography color="black" text={btnText} />
    </Button>
  </Box>
}

const JobOrExpert = () => {
  return (
    <Box py={5} bgcolor={GREY_COLOR}>
      <Stack
        style={{ backgroundImage: `url(${bgImage})` }}
        className="job_or_expert_section_bg"
        position="relative"
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 10, md: 4 }}
        sx={{
            py:10,
            justifyContent: "center",
            alignItems: "center",
          }}
      >
        <ReusableJobExpertSection
        heading="Looking for a Job?"
        description={"We provide online instant cash loans with quick approval"}
        btnText={"Browse Job"}
        />
        <ReusableJobExpertSection
        heading="Looking for a Expert?"
        description={"We provide online instant cash loans with quick approval"}
        btnText={"Post Job"}
        />
      </Stack>
    </Box>
  );
};

export default JobOrExpert;
