import { Box } from "@mui/material";
import React from "react";
import { Circles } from "react-loader-spinner";
import bgImage from "/backgroundImage.webp";
import { GREEN_COLOR } from "../Constants";

const Loader = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      <Circles
        height="80"
        width="80"
        color={GREEN_COLOR}
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Box>
  );
};

export default Loader;
