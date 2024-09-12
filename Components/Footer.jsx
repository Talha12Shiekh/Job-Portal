import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { FOOTER_BG, SOCIAL_LINKS } from "../Constants";
import CustomTypography from "./CustomTypography";
import useResponsivness from "../Hooks/useResponsivness";

const SingleIcon = ({ Icon, link, key }) => {
  const [bg, setbg] = useState(false);
  return (
    <Box
      className="singleicon"
      onMouseLeave={() => setbg(false)}
      onMouseOver={() => setbg(true)}
    >
      <Button key={key} href={link} target="_blank" sx={{ width: "100%", height: "100%" }}>
        <Icon bg={bg} />
      </Button>
    </Box>
  );
};

const Footer = () => {
    const checkingDownSM = useResponsivness("down","sm");

  return (
    <Box width="100%" bgcolor={FOOTER_BG}>
      <Container
        maxWidth="lg"
        sx={{
          px: checkingDownSM ? 5 : 10,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          py:5,
        }}
      >
        <Typography mb={4} variant={"h4"} className="poppins" color="white">
          Zidio Job Board
        </Typography>
        <Container maxWidth={"md"}>
          <CustomTypography
            text="A job portal that connects job seekers with employers, allowing users to explore job opportunities, apply for positions, and track applications. Employers can post jobs, manage listings, and review applications. The platform is designed to be user-friendly, offering a seamless experience for both job seekers and recruiters."
            textAlign="center"
            fontSize="1rem"
            color={"grey"}
          />
        </Container>
        <Container
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          {SOCIAL_LINKS.map(({ Icon, link, key }) => {
            return <SingleIcon key={key} Icon={Icon} link={link} />;
          })}
        </Container>
      </Container>
    </Box>
  );
};

export default Footer;
