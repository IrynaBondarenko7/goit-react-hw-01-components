import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    text: '#212121',
    backGround: '#EBDEF0',
    white: '#fff',
    grey: '#909497 ',
    statsColor: '#D4E6F1 ',
    icon: '#2980B9',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
