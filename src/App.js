import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global'

import Toggle from './components/Toggle';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
          <Toggle onClick={toggleTheme} toggleTheme={toggleTheme}/>
          
          <h1>It's a { theme === 'light' ? 'light theme' : 'dark theme' }!</h1>
          
      </>
    </ThemeProvider>
  );
}

export default App;
