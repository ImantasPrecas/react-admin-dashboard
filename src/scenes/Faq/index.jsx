import { Box, Button, TextField, useTheme, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Headers from '../../components/Headers';
import { tokens } from '../../theme';

function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Headers title='FAQ' subtitle='This is your FAQ' />
    </Box>
  );
}

export default FAQ;
