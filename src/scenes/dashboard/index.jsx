import { Box } from '@mui/material';
import Headers from '../../components/Headers';

function Dashboard() {
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Headers title='DASHBOARD' subtitle='Welcome to your Dashboard' />
      </Box>
    </Box>
  );
}

export default Dashboard;
