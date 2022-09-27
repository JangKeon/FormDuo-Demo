import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';

function AppBar(props) {
  return <MuiAppBar sx={{ bgcolor: "#3F3435" }} elevation={0} position="fixed" {...props} />;
}

export default AppBar;
