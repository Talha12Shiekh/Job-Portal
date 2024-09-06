import { Box, Button, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { GREEN_COLOR, GREY_COLOR, LIGHT_GREEN_COLOR } from "../Constants";
import CustomTypography from "./CustomTypography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

const SingleJobCard = ({name,location,country,img}) => {
  const [liked, setliked] = useState(false);
  return (
    <>
      <Box
        width="100%"
        mt={4}
        sx={{cursor:"pointer",":hover":{boxShadow:`2px 2px 15px grey`}}}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="white"
        p={5}
      >
        <Box display="flex" gap={5}>
          <Box
            bgcolor={GREY_COLOR}
            p={2}
            display="flex"
            justifyContent="center"
            borderRadius={2}
            alignItems="center"
          >
            {img}
          </Box>
          <Box>
            <Typography variant="h5" className="poppins">
              {name}
            </Typography>
            <Box display="flex" mt={2} gap={5}>
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
        </Box>
        <Box display="flex">
          <IconButton
            onClick={() => setliked((p) => !p)}
            sx={{ p: 0, mr: 2 }}
          >
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
          <Box>
            <Button variant="outlined" color="success" sx={{ px: 2, py: 1 }}>
              <CustomTypography text="Apply Now" color={GREEN_COLOR} />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleJobCard;
