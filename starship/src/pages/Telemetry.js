import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import OneDay from '../components/OneDay';
import LineGraph from '../components/LineGraph';
import InputArea from '../components/InputArea';

const Telemetry = () => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      style={{ marginTop: 20 }}
    >
      <Grid item lg={7}>
        <Typography variant="h5" align="center">
          Daily Activities
        </Typography>
        <LineGraph />
      </Grid>
      <Grid item lg={3}>
        <InputArea />
        <OneDay />
      </Grid>
    </Grid>
  );
};

export default Telemetry;
