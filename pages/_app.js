import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './modules/theme';
import * as React from 'react';
import AppAppBar from './modules/views/AppAppBar'
import AppFooter from './modules/views/AppFooter';

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <React.Fragment>
          <AppAppBar/>
          <Component {...pageProps}/>
          <AppFooter/>
        </React.Fragment>
    </ThemeProvider>
  );
}

export default MyApp
