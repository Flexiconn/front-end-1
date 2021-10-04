import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import SensorList from '../components/dashboard/SensorList';

const Sensors = () => (
  <>
    <Helmet>
      <title>Sensors | Weatherly</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <SensorList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Sensors;
