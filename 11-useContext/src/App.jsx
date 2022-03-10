/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import ThemeContext from './context/ThemeContext';

const App = () => {
  const [theme, setTheme] = useState('light');
  const contextValue = {
    theme,
    updateTheme: setTheme,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      <div
        className={`py-10 max-w-7xl mx-auto ${
          theme === 'light' ? 'bg-white' : 'bg-gray-800 text-white'
        }`}>
        <header>
          <div>
            <img src="/img/logo.png" alt="logo app" className="w-36 mx-auto" />
          </div>
        </header>
        <main>
          <div className="sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96">
                <Toolbar />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
