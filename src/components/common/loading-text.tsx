import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingText = ({ isReady, children }: any) => {
  return isReady ? children : <CircularProgress color="inherit" size="18px" />;
};

export default LoadingText;
