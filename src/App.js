import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Navbar from './scenes/global/Navbar';
import Dashboard from './scenes/Dashboard';
import Team from './scenes/Team';
import Invoices from './scenes/Invoices';
import Contacts from './scenes/Contacts';
import Form from './scenes/Form';
import FAQ from './scenes/Faq';
import Calendar from './scenes/Calendar';
// import Bar from './scenes/Bar';
// import Line from './scenes/Line';
// import Pie from './scenes/Pie';
// import Geography from './scenes/Geography';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Navbar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/calendar' element={<Calendar />} />
              {/* <Route path='/bar' element={<Bar />} /> */}
              {/* <Route path='/pie' element={<Pie />} /> */}
              {/* <Route path='/line' element={<Line />} /> */}
              {/* <Route path='/geography' element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
