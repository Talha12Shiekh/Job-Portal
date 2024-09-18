import { Box, Button, Drawer, IconButton } from "@mui/material";
import React from "react";
import { pages } from "../Constants";
import CustomTypography from "./CustomTypography";
import LoginAndSignUp from "./LoginAndSignUp";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const SideBar = ({ open, setopen }) => {
  const handleClose = () => setopen((p) => !p);

  const navigate = useNavigate()

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,.5)",
          p: 5,
        },
      }}
      anchor="top"
      open={open}
      onClose={handleClose}
    >
      <Box alignSelf="flex-end">
        <IconButton onClick={handleClose} sx={{ p: 0 }}>
          <CloseIcon sx={{ fontSize: 50, color: "white" }} />
        </IconButton>
      </Box>
      <Box>
        {pages.map(({key,text,link}) => {
          return (
            <Box
            key={key}
            width={"100%"}>
              <Button sx={{ width: "100%" }} variant="text" onClick={() => {navigate(link);handleClose()}}>
                <Box width="100%" textAlign="start">
                <CustomTypography text={text} sx={{ my: 1 }} />
                </Box>
              </Button>
            </Box>
          );
        })}
      </Box>
      <LoginAndSignUp mt={3} alignSelf="flex-end" gap={1} />
    </Drawer>
  );
};

export default SideBar;
