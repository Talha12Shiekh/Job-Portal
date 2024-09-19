import { Box, Container } from "@mui/material";
import React from "react";

const ScreenWrapper = ({ children,bgcolor,sx, ...rest }) => {
  return (
    <Box width="100%" bgcolor={bgcolor} sx={sx}>
      <Container maxWidth="lg" component="main" {...rest}>
        {children}
      </Container>
    </Box>
  );
};

export default ScreenWrapper;
