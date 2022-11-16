import { Box, Button, TextField, useTheme, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Headers from '../../components/Headers';

import { tokens } from '../../theme';

function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Headers title='CALENDAR' subtitle='Personal calendar' />
    </Box>
  );
}

export default Calendar;
