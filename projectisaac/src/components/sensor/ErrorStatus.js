import {
  Chip,
  Tooltip,
} from '@material-ui/core';

const ErrorStatus = () => (
  <Tooltip title={"Error code: 'test' | Probability: 10%"} arrow>
    <Chip color="secondary" label="Error" size="medium" />
  </Tooltip>
);
export default ErrorStatus;
