import {
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import CustomTypography from "./CustomTypography";
import { GREEN_COLOR, searches } from "../Constants";
import useResponsivness from "../Hooks/useResponsivness";

const JobSearchSection = () => {
   const matches = useResponsivness("down","lg")
   const matchesSM = useResponsivness("down","sm")
  return (
    <Container maxWidth="lg" sx={{ p: matchesSM ? 5 : 10 }}>
      <Grid container spacing={3}>
        <Grid size={{ lg: 3,md:4,xs:12 }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Search Jobs"
            variant="outlined"
          />
        </Grid>
        <Grid size={{ lg: 3,md:4,xs:12 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Location"
              onChange={() => {}}
            >
                {
                    [1,2,3,4].map(elem => {
                        return <MenuItem value={elem}>Location {elem}</MenuItem>
                    })
                }
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ lg: 3,md:4,xs:12 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Category"
              onChange={() => {}}
            >
                {
                    [1,2,3,4].map(elem => {
                        return <MenuItem value={elem}>Category {elem}</MenuItem>
                    })
                }
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ lg: 3,xs:12 }}>
          <Button fullWidth variant="contained" sx={{ bgcolor: GREEN_COLOR }}>
            <CustomTypography text="Find Job" sx={{ p: 1 }} />
          </Button>
        </Grid>
      </Grid>
      <Box mt={5} display="flex" flexWrap={"wrap"} alignItems="center" >
        <CustomTypography text="Popular Searches :" color="black" mr={2} />
        <Box display="flex" mt={matches ? 2 : 0} flexWrap="wrap">
        {
            searches.map(search => {
                return <Chip label={search} sx={{fontSize:15,mr:1,mt:matches ? 2 : 0}} variant="outlined" onClick={() => {}} />
            })
        }
        </Box>
      </Box>
    </Container>
  );
};

export default JobSearchSection;
