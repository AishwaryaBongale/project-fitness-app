import { Box, Typography, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor={"#fff3f4"}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography color="textSecondary" variant="subtitle1">
            {`© Copyright ${new Date().getFullYear()} Elite Fitness `}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
