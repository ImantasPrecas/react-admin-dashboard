import { Box } from '@mui/material';
import LineChart from '../../components/LineChart';
import Headers from '../../components/Headers';

function Line() {
  return (
    <Box m='20px'>
      <Headers title='Bar Chart' subtitle='This is Bar chart' />
      <Box height='75vh'>
        <LineChart />
      </Box>
    </Box>
  );
}

export default Line;
