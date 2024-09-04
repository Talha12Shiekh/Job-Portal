import { Typography } from "@mui/material";
import React from "react";

const CustomTypography = ({text,...props}) => {
  return (
    <Typography
      textTransform="capitalize"
      color="white"
      className="poppins"
      fontSize="1.1rem"
      {...props}
    >
      {text}
    </Typography>
  );
};

export default CustomTypography;
