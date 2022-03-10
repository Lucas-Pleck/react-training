import React from 'react';
import Tweet from './components/Tweet';

const App = () => (
  <div className="py-10 max-w-7xl mx-auto bg-gray-200">
    <header />
    <main>
      <div className="sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0 min-h-screen">
          <div className="border-4 border-dashed border-gray-200 rounded-lg bg-gray-50">
            <Tweet />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;
