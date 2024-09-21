import React from "react";
import ScreenWrapper from "../Components/ScreenWrapper";
import { Box, Grid2 as Grid, TextField } from "@mui/material";
import CustomTypography from "../Components/CustomTypography";
import { GreenButton } from "./Home";
import { CONTACTS_INFORMATION } from "../Constants";
import useResponsivness from "../Hooks/useResponsivness";

const SingleContactInformationComponent = ({ icon, text }) => {
  return (
    <Box mb={3} display="flex" alignItems="center" gap={2}>
      <Box>{icon}</Box>
      <Box>
        <CustomTypography text={text} color="black" />
      </Box>
    </Box>
  );
};

const ContactsInformationComponent = () => {
  return (
    <>
      {CONTACTS_INFORMATION.map(({ icon, text, key }) => (
        <SingleContactInformationComponent icon={icon} text={text} key={key} />
      ))}
    </>
  );
};

const Contacts = () => {
    const checkingSmDown = useResponsivness("down","sm")
  return (
    <ScreenWrapper sx={{ p: checkingSmDown ? 2 : 10 }}>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3891.1956907854774!2d77.6288!3d12.7658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84179333b909112d%3A0x99b7aa8200259bb9!2sZidio%20Development%20Pvt.%20Ltd!5e0!3m2!1sen!2s!4v1726915776973!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
      <CustomTypography
        text="Get in Touch"
        color="black"
        fontWeight="bold"
        fontSize="2rem"
        my={4}
      />
      <Grid container spacing={2}>
        <Grid size={{ xs:12,md: 8 }}>
          <TextField
            id="outlined-multiline-static"
            label="Enter Message"
            multiline
            rows={8}
            fullWidth
          />
          <Box my={3} display="flex" justifyContent="space-between" gap={2}>
            <TextField
              id="outlined-multiline-flexible"
              label="Enter your name"
              type="name"
              multiline
              maxRows={4}
              fullWidth
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Enter your email"
              type="email"
              multiline
              maxRows={4}
              fullWidth
            />
          </Box>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter subject"
            type="text"
            multiline
            maxRows={4}
            fullWidth
          />
          <Box width="100%" mt={2}>
            <GreenButton text="Send Message" />
          </Box>
        </Grid>
        <Grid size={{ xs:12, md: 4 }}>
          <ContactsInformationComponent />
        </Grid>
      </Grid>
    </ScreenWrapper>
  );
};

export default Contacts;
