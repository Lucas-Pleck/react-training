import React from 'react';
import './assets/App.css';

// - html part of components must be in () exept short code with only 1 balise
// - add {} when JS (ex:console.log(),...) + add return at the end of html component part.
// - JSX has alway a parent element or a fragment <>.
// -

const TapABeer = () => (
  <>
    <div>Serve me a good beer after all this work!</div>
    <div>ok!</div>
  </>
);
const ValidIndicator = () => {
  const isValid = false;
  const pet = 'dog';
  return (
    <>
      <span>{isValid ? 'Valid' : 'Not Valid'}</span>;
      <span className="block mx-16">
        {pet === 'cat' && "It's a cat"}
        {pet === 'dog' && "It's a dog"}
        {pet === 'rabbit' && "It's a rabbit"}
      </span>
    </>
  );
};

const App = () => (
  <div className="py-10 max-w-7xl mx-auto">
    <header>
      <div>
        <img src="/img/logo.png" alt="logo app" className="w-36 mx-auto" />
      </div>
    </header>
    <main>
      <div className="sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96">
            <TapABeer />
            <ValidIndicator />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;
