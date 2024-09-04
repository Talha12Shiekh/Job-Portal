import { Typography } from "@mui/material";
import React from "react";

const CustomTypography = ({text,...props}) => {
  return (
    <Typography
      textTransform="capitalize"
      variant="h6"
      color="white"
      className="poppins"
      {...props}
    >
      {text}
    </Typography>
  );
};

export default CustomTypography;
