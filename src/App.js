import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/main';

const App = () => {
    return (
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
    );
}

export default App;
