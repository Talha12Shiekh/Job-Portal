import {
  Grid2 as Grid,
  Box,
  Container,
  Divider,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { GREEN_COLOR, GREY_COLOR } from "../Constants";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  HeartButton,
  JobIcon,
  NameAndLocation,
  NameLocationAndJobIconContainer,
} from "../Components/SingleJobCard";
import CustomTypography from "../Components/CustomTypography";
import useResponsivness from "../Hooks/useResponsivness";

const Heading = ({ text }) => {
  return (
    <CustomTypography text={text} color="black" fontSize="1.5rem" mt={5} />
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

const JobSummaryComponent = ({ ltext, rtext }) => {
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
    liked
  } = currentlocation.state;

  const fileInputRef = useRef(null);

  const [filename,setfilename] = useState("");

  function handleChange(e){
    setfilename(e.target.files[0].name)
  }

  const checkingSMDown = useResponsivness("down","sm");

  return (
    <>
    <input type="file" onChange={handleChange} hidden ref={fileInputRef} />
    <Box width="100%" bgcolor={GREY_COLOR}>
      <Container maxWidth="lg" sx={{ p: checkingSMDown ? 2 : 10 }} component="main">
        <Grid container spacing={2}>
          <Grid
            sx={{ display: "flex", flexDirection: "column", gap: 5 }}
            size={{ md: 8,xs:12 }}
          >
            <Box bgcolor="white" p={ checkingSMDown ? 3 : 5}>
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
                  <HeartButton liked={liked} />
                </Box>
              </Box>
              <Divider sx={{ mt: 4 }} />
              <Box>
                <Heading text={"Job description"} />
                <CustomTypography
                  text={description}
                  fontSize="1rem"
                  color={"grey"}
                  my={4}
                />
                <Heading text={"Responsibility"} />
                {responsibility.map((res) => (
                  <SingleLi res={res} />
                ))}
                <Heading text={"Qualifications"} />
                {qualifications.map((res) => (
                  <SingleLi res={res} />
                ))}
                <Heading text={"Benefits"} />
                <CustomTypography
                  fontSize="1rem"
                  text={benefits}
                  color={"grey"}
                  my={4}
                />
              </Box>
            </Box>
            <Box p={checkingSMDown ? 2 : 3} bgcolor="white" width="100%">
              <Heading text="Apply for the job" />
              <Box my={3} display="flex" width="100%" gap={5}>
                <TextField
                  className="poppins"
                  fullWidth
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                />
                <TextField
                  className="poppins"
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Box>
              <TextField
                className="poppins"
                fullWidth
                id="outlined-basic"
                label="Website/Portfolio link"
                variant="outlined"
              />
              <TextField
              onClick={() => fileInputRef?.current?.click()}
                slotProps={{
                  input: {
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <CloudUploadIcon />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{ mt: 4 }}
                className="upload_input"
                fullWidth
                id="outlined-basic"
                placeholder={filename === "" ? "Upload CV" : filename}
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                placeholder="Cover letter"
                multiline
                fullWidth
                rows={6}
                sx={{mt:4}}
              />
              <Button variant="contained" fullWidth sx={{bgcolor:GREEN_COLOR,mt:4}}>
                <Typography variant="h6" className="poppins" textTransform="capitalize">Apply Now</Typography>
              </Button>
            </Box>
          </Grid>
          <Grid
            sx={{ bgcolor: "white", p: checkingSMDown ?  2 : 3, height: "fit-content" }}
            size={{ md: 4,xs:12 }}
          >
            <Heading text={"Job Summary"} />
            <Divider sx={{ mt: 4 }} />
            <Box p={3}>
              <JobSummaryComponent ltext={"Published on"} rtext={publishedOn} />
              <JobSummaryComponent
                ltext={"Vacancy"}
                rtext={`${vacancy} Positions`}
              />
              <JobSummaryComponent ltext={"Salary"} rtext={`$${salary[0]} - $${salary[1]}`} />
              <JobSummaryComponent ltext={"Location"} rtext={country} />
              <JobSummaryComponent ltext={"Job Nature"} rtext={location} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  );
};

export default JobDetailsScreen;
