import { Box, Container, Typography, Grid2 as Grid } from "@mui/material";
import React from "react";
import { CATEGORIES, GREY_COLOR } from "../Constants";
import useResponsivness from "../Hooks/useResponsivness";
import CategoryBox from "../Components/CategoryBox";
import ScreenWrapper from "../Components/ScreenWrapper";

const Categories = () => {
  const matches = useResponsivness("down", "sm");
  return (
    <ScreenWrapper bgcolor={GREY_COLOR} sx={{ px: matches ? 2 : 10,pt:8,pb:2 }}>
        <Typography mb={8} variant={matches ? "h5" : "h4"} className="poppins">
          Popular Categories
        </Typography>

        <Grid
          container
          spacing={5}
          my={5}
          justifyContent="center"
          alignItems="center"
        >
          {CATEGORIES.map(({ category, seats }) => (
            <CategoryBox category={category} seats={seats} key={seats} />
          ))}
        </Grid>
    </ScreenWrapper>
  );
};

export default Categories;
