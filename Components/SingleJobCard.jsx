import { Box, Button, Typography, IconButton, Container } from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { GREEN_COLOR, GREY_COLOR, LIGHT_GREEN_COLOR } from "../Constants";
import CustomTypography from "./CustomTypography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useResponsivness from "../Hooks/useResponsivness";
import { useNavigate } from "react-router-dom";

const TextAndIcon = ({ text, Icon }) => {
  return (
    <Typography
      display="flex"
      color={"grey"}
      variant="body1"
      className="poppins"
      justifyContent="center"
      alignItems="center"
    >
      <Icon />
      {text}
    </Typography>
  );
};

export const JobIcon = ({ img }) => {
  return (
    <Box
      bgcolor={GREY_COLOR}
      p={2}
      display="flex"
      justifyContent="center"
      alignSelf="center"
      borderRadius={2}
      alignItems="center"
      width={100}
      height={100}
    >
      <img src={img} alt="Loading..." />
    </Box>
  );
};

export const NameAndLocation = ({ name, country, location }) => {
  const checkingMD = useResponsivness("down", "md");
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      alignItems="flex-start"
    >
      <Typography variant="h5" className="poppins">
        {name}
      </Typography>
      <Box display="flex" mt={2} gap={checkingMD ? 2 : 5}>
        <TextAndIcon
          text={country}
          Icon={() => <LocationOnIcon sx={{ fontSize: 20, mr: 0.5 }} />}
        />
        <TextAndIcon
          text={location}
          Icon={() => <AccessTimeIcon sx={{ fontSize: 20, mr: 1 }} />}
        />
      </Box>
    </Box>
  );
};

export const NameLocationAndJobIconContainer = ({ children }) => {
  const checkingMD = useResponsivness("down", "md");
  return (
    <Box display="flex" flexDirection={checkingMD ? "column" : "row"} gap={5}>
      {children}
    </Box>
  );
};

export const HeartButton = ({ liked, setliked }) => {
  return (
    <IconButton onClick={() => setliked((p) => !p)} sx={{ p: 0, mr: 2 }}>
      <Box
        width="100%"
        p={1}
        bgcolor={LIGHT_GREEN_COLOR}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={5}
      >
        {!liked ? (
          <FavoriteBorderIcon sx={{ color: GREEN_COLOR }} />
        ) : (
          <FavoriteIcon sx={{ color: GREEN_COLOR }} />
        )}
      </Box>
    </IconButton>
  );
};

export const WholeContainer = ({ children,givepadding = true }) => {
  const checkingMD = useResponsivness("down", "md");
  return (
    <Box
      width={"100%"}
      mt={4}
      sx={{ cursor: "pointer", ":hover": { boxShadow: `2px 2px 15px grey` } }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection={checkingMD ? "column" : "row"}
      bgcolor="white"
      p={givepadding ? 3 : 0}
    >
      {children}
    </Box>
  );
};

const SingleJobCard = (singlejob) => {
  const [liked, setliked] = useState(false);
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
    key,
  } = singlejob;
  const jobobject = {
    name,
    location,
    country,
    description,
    responsibility,
    qualifications,
    benefits,
    salary,
    vacancy,
    publishedOn,
    img,
    liked
  };
  const checkingMD = useResponsivness("down", "md");
  const navigate = useNavigate();

  return (
    <Box display="flex" key={key} justifyContent="center" component="section">
      <WholeContainer>
        <Box
          display="flex"
          flexDirection={checkingMD ? "column" : "row"}
          gap={5}
        >
          <JobIcon img={img} />
          <NameAndLocation name={name} country={country} location={location} />
        </Box>
        <Box display="flex" mt={checkingMD ? 5 : 0}>
          <HeartButton liked={liked} setliked={setliked} />
          <Box>
            <Button
              onClick={() => navigate("jobdetailsscreen", { state: jobobject })}
              variant="outlined"
              color="success"
              sx={{ px: 2, py: 1 }}
            >
              <CustomTypography text="Apply Now" color={GREEN_COLOR} />
            </Button>
          </Box>
        </Box>
      </WholeContainer>
    </Box>
  );
};

export default SingleJobCard;
