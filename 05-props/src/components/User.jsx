import React from 'react';

const User = ({ name, job, age, comment }) => (
  <div className="py-2 mx-4 mb-4 border-b">
    <h1 className="font-bold text-2xl">Hello {name}</h1>
    <h2>{age > 18 ? 'Tu es trop jeune pour accéder à ce site' : 'Contactez-nous'}</h2>
    <p>Job : {job}</p>
    <p>Comment : {comment}</p>
  </div>
);

export default User;
