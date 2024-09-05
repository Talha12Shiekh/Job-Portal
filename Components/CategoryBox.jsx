import { Box, Button, Chip, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import { LIGHT_BLUE_COLOR } from "../Constants";

const CategoryBox = ({ seats, category }) => {
  return (
    <Grid
      key={seats}
      size={{ lg: 3, md: 4, sm: 6, xs: 12 }}
      sx={{
        borderRadius:2,
        overflow:"hidden",
        cursor: "pointer",
        transition:"transform 0.5s linear",
        "&:hover": {
          transform: "scale(1.05)", 
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
      }}
      bgcolor="white"
    >
      <Button sx={{ width: "100%"}}>
        <Box
        width="100%"
          p={2}
          px={2}
          display="flex"
          justifyContent="flex-start"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Typography
            variant="h6"
            color="black"
            fontWeight="normal"
            mb={2}
            className="poppins"
            textTransform="capitalize"
          >
            {category}
          </Typography>
          <Box display="flex" justifyContent={"flex-start"} alignItems="center">
            <Chip
              label={seats}
              sx={{
                fontSize: 15,
                bgcolor: LIGHT_BLUE_COLOR,
                fontWeight: "bold",
                borderRadius: 2,
              }}
              color="primary"
              variant="outlined"
            />
            <Typography
              textTransform="capitalize"
              fontSize=".9rem"
              ml={1}
              className="poppins"
              color={"grey"}
            >
              Available positions
            </Typography>
          </Box>
        </Box>
      </Button>
    </Grid>
  );
};

export default CategoryBox;
