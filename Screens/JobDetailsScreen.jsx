import {
  Grid2 as Grid,
  Box,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { GREY_COLOR } from "../Constants";
import {
  HeartButton,
  JobIcon,
  NameAndLocation,
  NameLocationAndJobIconContainer,
} from "../Components/SingleJobCard";
import CustomTypography from "../Components/CustomTypography";

const Heading = ({ text }) => {
  return (
    <CustomTypography
      text={text}
      color="black"
      fontSize="1.5rem"
      mt={5}
    />
  );
};

const SingleLi = ({ res }) => {
  return (
    <Typography
      key={res}
      mt={2}
      component="li"
      fontSize={"1.1rem"}
      color="grey"
    >
      {res}
    </Typography>
  );
};

const JobSummaryComponent = ({ltext,rtext}) => {
  return (
    <Typography component={"li"} variant="h6">
      <Typography component={"span"} fontSize="1.2rem" mr={1} color="grey">
        {ltext} :
      </Typography>
      <Typography component={"span"} fontSize="1.2rem" color="black">
        {rtext}
      </Typography>
    </Typography>
  );
};
 

const JobDetailsScreen = () => {
  const currentlocation = useLocation();

  const [liked, setliked] = useState(false);

  const {
    img,
    name,
    location,
    description,
    responsibility,
    qualifications,
    benefits,
    publishedOn,
    vacancy,
    salary,
    country,
  } = currentlocation.state;

  return (
    <Box width="100%" bgcolor={GREY_COLOR}>
      <Container maxWidth="lg" sx={{ p: 10 }} component="main">
        <Grid container spacing={2}>
          <Grid sx={{ bgcolor: "white", p: 5 }} size={{ md: 8 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <NameLocationAndJobIconContainer>
                <Box>
                  <JobIcon img={img} />
                </Box>
                <Box>
                  <NameAndLocation
                    name={name}
                    country={country}
                    location={location}
                  />
                </Box>
              </NameLocationAndJobIconContainer>
              <Box>
                <HeartButton liked={liked} setliked={setliked} />
              </Box>
            </Box>
            <Divider sx={{ mt: 4 }} />
            <Box>
              <Heading text={"Job description"} />
              <CustomTypography text={description} fontSize="1rem" color={"grey"} my={4} />
              <Heading text={"Responsibility"} />
              {responsibility.map((res) => (
                <SingleLi res={res} />
              ))}
              <Heading text={"Qualifications"} />
              {qualifications.map((res) => (
                <SingleLi res={res} />
              ))}
              <Heading text={"Benefits"} />
              <CustomTypography fontSize="1rem" text={benefits} color={"grey"} my={4} />
            </Box>
          </Grid>
          <Grid
            sx={{ bgcolor: "white", p: 3, height: "fit-content" }}
            size={{ md: 4 }}
          >
            <Heading text={"Job Summery"} />
            <Divider sx={{ mt: 4 }} />
            <Box p={3}>
             <JobSummaryComponent
             ltext={"Published on"}
             rtext={publishedOn}
             />
             <JobSummaryComponent
             ltext={"Vacancy"}
             rtext={`${vacancy} Positions`}
             />
             <JobSummaryComponent
             ltext={"Salary"}
             rtext={salary}
             />
             <JobSummaryComponent
             ltext={"Location"}
             rtext={country}
             />
             <JobSummaryComponent
             ltext={"Job Nature"}
             rtext={location}
             />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JobDetailsScreen;
