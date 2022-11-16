import { Box } from '@mui/material';
import BarChart from '../../components/BarChart';
import Headers from '../../components/Headers';

function Bar() {
  return (
    <Box m='20px'>
      <Headers title='Bar Chart' subtitle='This is Bar chart' />
      <Box height='75vh'>
        <BarChart />
      </Box>
    </Box>
  );
}

export default Bar;
