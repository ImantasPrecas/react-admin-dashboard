import { Box } from '@mui/material';
import PieChart from '../../components/PieChart';
import Headers from '../../components/Headers';

function Pie() {
  return (
    <Box m='20px'>
      <Headers title='Bar Chart' subtitle='This is Bar chart' />
      <Box height='75vh'>
        <PieChart />
      </Box>
    </Box>
  );
}

export default Pie;
