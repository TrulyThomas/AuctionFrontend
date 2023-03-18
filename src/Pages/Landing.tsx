import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Paper
} from '@mui/material';

const Landing = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h1" align="center" gutterBottom>
              Welcome to AuctionSite
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="p" align="center" gutterBottom>
              Discover amazing items and bid on them in real-time!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={2}>
              <Box p={2}>
                <Typography variant="h6" component="h3">
                  Featured Auctions
                </Typography>
                <Typography>
                  Check out some of our most popular auctions happening right now!
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Landing;