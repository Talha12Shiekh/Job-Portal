import { Box, Button, Container, Grid2 as Grid, Typography } from '@mui/material'
import React from 'react'
import bgImage from "../public/backgroundImage.webp";
import illustration from "../public/illustration.webp";
import CustomTypography from '../Components/CustomTypography';
import { GREEN_COLOR } from '../Constants';

const Home = () => {
  return (
    <Container maxWidth="xl"
      sx={{display:"flex",justifyContent:"center",alignItems:"center"}}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
      }}
    >
        <Box width="100%">
       <Grid p={2} container spacing={2} display="flex" justifyContent={"center"}>
  <Grid size={7} alignSelf={"center"}>
    <Typography variant='h4' color="white" className="poppins" gutterBottom>4536+ Jobs listed</Typography>
    <Typography variant='h2' color="white" className="poppins" fontWeight="bold" gutterBottom>Find your Dream Job</Typography>
    <Typography variant='body1' color="white" className="poppins" mb={5}>Your Gateway to the Perfect Job—Connecting Talent with Opportunity</Typography>
    <Button variant='contained' sx={{bgcolor:GREEN_COLOR,border:"none",boxShadow:"none",p:2}}>
        <CustomTypography text="Upload Your Resume" fontWeight="bold" fontSize={"large"}/>
    </Button>
  </Grid>
  <Grid size={4}
  pt={30}
  >
    <img width={"100%"} height={"100%"} src={illustration} alt="Loading..." />
  </Grid>

</Grid>
  </Box>
    </Container>
  )
}

export default Home