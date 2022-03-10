import React from 'react';
import User from './components/User';
import Submit from './components/Submit';

const user = [
  {
    id: 1,
    name: 'Pepito',
    age: 78,
    job: 'Priester',
    comment: {
      lastComment: 'like to eat appels',
    },
  },
  {
    id: 2,
    name: 'Jean',
    age: 12,
    job: 'Gymnast',
    comment: {
      lastComment: 'like to eat banana',
    },
  },
  {
    id: 3,
    name: 'Janine',
    age: 22,
    job: 'Dancer',
    comment: {
      lastComment: 'like to eat chocolate',
    },
  },
];

const launchTheRocket = () => {
  console.log('Get ready for the Rocket');
  let cpt = 10;

  const timer = setInterval(() => {
    console.log(cpt);
    cpt -= 1;
    if (cpt === 0) {
      clearInterval(timer);
      console.log('launch the rocket');
    }
  }, 1000);
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
            <Submit actionOnClick={launchTheRocket} />
            {user.map((u) => (
              <User
                key={u.id}
                name={u.name}
                age={u.age}
                job={u.job}
                comment={u.comment.lastComment}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;
