import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import Settings from '../components/settings/Settings';

const SettingsView = () => (
  <>
    <Helmet>
      <title>Settings | Weatherly</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Settings />
      </Container>
    </Box>
  </>
);

export default SettingsView;
