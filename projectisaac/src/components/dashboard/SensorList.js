import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

const orders = [
  {
    ref: 'Sensor 1',
    temperature: '69',
    status: 'Running '
  },
  {
    ref: 'Sensor 2',
    temperature: '69',
    status: 'Running '
  },
  {
    ref: 'Sensor 3',
    temperature: '69',
    status: 'Error'
  },
  {
    ref: 'Sensor 4',
    temperature: '69',
    status: 'Running '
  },
  {
    ref: 'Sensor 5',
    temperature: '69',
    status: 'Running '
  },
  {
    ref: 'Sensor 6',
    temperature: '69',
    status: 'Running '
  }
];

const SensorList = (props) => (
  <Card {...props}>
    <CardHeader title="Sensors" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Sensor Id
              </TableCell>
              <TableCell>
                Temperature
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.temperature}
                </TableCell>
                <TableCell>
                  <Chip
                    color={order.status === 'Error' ? 'secondary' : 'primary'}
                    label={order.status}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
  </Card>
);

export default SensorList;
