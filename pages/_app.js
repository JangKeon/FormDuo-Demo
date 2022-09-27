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
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppAppBar/>
        <Component {...pageProps}/>
        <AppFooter/>
    </ThemeProvider>
  );
}

export default MyApp
