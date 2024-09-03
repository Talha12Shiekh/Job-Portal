import { AppBar, Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import bgImage from "../public/backgroundImage.webp";
import logo from "../public/logo.webp";
import { GREEN_COLOR, pages } from "../Constants";
import CustomTypography from "./CustomTypography";

const Navbar = () => {
  return (
    <AppBar
    position="static"
      component="nav"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      <Container maxWidth="xl" sx={{p:2,display:"flex",justifyContent:"space-between",alignItems:"center"}} component="section">
        <Box component="div">
          <img src={logo} alt="Loading..." />
        </Box>
        <Box component="div" display="flex" gap={6}>
            {
                pages.map(link => (
                    <Button variant="text" key={link}>
                    <CustomTypography text={link} />
                </Button> 
                ))
            }
           
        </Box>
        <Box component="div" display="flex" gap={3}>
          <Button variant="outlined" color="success" sx={{borderWidth:2,borderColor:GREEN_COLOR}}>
            <CustomTypography text="Login" />
          </Button>
          <Button variant="contained" sx={{bgcolor:GREEN_COLOR}}>
            <CustomTypography text="Post a Job" /> 
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
