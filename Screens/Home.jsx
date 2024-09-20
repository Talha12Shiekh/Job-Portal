import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import React from "react";
import bgImage from "../public/backgroundImage.webp";
import illustration from "../public/illustration.webp";
import CustomTypography from "../Components/CustomTypography";
import { GREEN_COLOR } from "../Constants";
import useResponsivness from "../Hooks/useResponsivness";

export const GreenButton = ({text,onClick,fullWidth = false,color=GREEN_COLOR}) => {
  return (
    <Button
    fullWidth={fullWidth}
    onClick={onClick}
      variant="contained"
      sx={{
        bgcolor: color,
        border: "none",
        boxShadow: "none",
        p: 2,
        mb:2
      }}
    >
      <CustomTypography
        text={text}
        fontWeight="bold"
        fontSize={"large"}
      />
    </Button>
  );
};

const Home = () => {
  const matches = useResponsivness("up", "lg");
  return (
    <Container
      component="section"
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: matches ? 0 : 2,
      }}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      <Box width="100%" component="div">
        <Grid
          p={2}
          container
          spacing={2}
          display="flex"
          justifyContent={"center"}
        >
          <Grid size={{ lg: 7, md: 12 }} alignSelf={"center"}>
            <Typography
              variant={matches ? "h4" : "h5"} // 4
              color="white"
              className="poppins"
              gutterBottom
              mb={3}
            >
              4536+ Jobs listed
            </Typography>
            <Typography
              variant={matches ? "h2" : "h4"} //4
              color="white"
              className="poppins"
              fontWeight="bold"
              gutterBottom
              mb={3}
            >
              Find your Dream Job
            </Typography>
            <Typography
              variant={matches ? "body1" : "body2"}
              color="white"
              className="poppins"
              mb={5}
            >
              Your Gateway to the Perfect Job—Connecting Talent with Opportunity
            </Typography>
            <GreenButton
            text="Upload Your Resume"
            onClick={() => {}}
            />
          </Grid>
          {matches && (
            <Grid size={{ lg: 4 }} pt={30}>
              <img
                width={"100%"}
                height={"100%"}
                src={illustration}
                alt="Loading..."
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
