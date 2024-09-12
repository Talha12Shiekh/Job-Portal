import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import bgImage from "../public/backgroundImage.webp";
import logo from "../public/logo.webp";
import { pages } from "../Constants";
import CustomTypography from "./CustomTypography";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";
import LoginAndSignUp from "./LoginAndSignUp";
import useResponsivness from "../Hooks/useResponsivness";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const matches = useResponsivness("down","lg");
  const navigate = useNavigate();

  return (
    <>
      <SideBar open={open} setopen={setopen} />
      <AppBar
        position="static"
        component="nav"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          component="section"
        >
          <Box component="div" onClick={() => navigate("/")}>
            <img src={logo} alt="Loading..." />
          </Box>
          {matches ? (
            <Box component="div">
              <IconButton onClick={() => setopen((p) => !p)}>
                <MenuIcon sx={{ fontSize: 50, color: "white" }} />
              </IconButton>
            </Box>
          ) : (
            <>
              <Box component="div" display="flex" gap={6}>
                {pages.map(({key,text,link}) => (
                  <Button onClick={() => navigate(link)} variant="text" key={key}>
                    <CustomTypography text={text} />
                  </Button>
                ))}
              </Box>
              <LoginAndSignUp />
            </>
          )}
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
