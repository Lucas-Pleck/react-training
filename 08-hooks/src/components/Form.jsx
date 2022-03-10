import React, { useState } from 'react';

const Form = () => {
  const [value, setValue] = useState('Deadpool');
  const [error, setError] = useState('');

  const [{ lastName, firstName, gender }, setSigup] = useState({
    lastName: '',
    firstName: '',
    gender: '',
  });

  const handleChange = (e) => {
    console.log(e);
    const { value: content, name } = e.target;

    setSigup((prev) => {
      console.log(prev);
      const newState = {
        ...prev,
        [name]: content,
      };
      console.log(newState);
      return newState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('You have errors in your form!');
  };

  return (
    <form className="w-1/2 mx-auto p-8 bg-gray-100 shadow" onSubmit={handleSubmit}>
      <div className="w-1/2 mb-4">
        <label htmlFor="movie" className="block font-medium text-gray-700">
          My Favorite Movie
        </label>
        <input
          type="text"
          id="movie"
          className="block w-full px-2 py-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="button"
          className={`px-4 py-1 rounded ${
            value.length === 0 ? 'bg-gray-100 cursor-none' : 'bg-blue-500'
          }`}>
          CLICK ME
        </button>
      </div>
      <div className="w-1/2 mb-4">
        <label htmlFor="firstName" className="block font-medium text-gray-700">
          Firstname
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          className="block w-full px-2 py-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          onChange={handleChange}
        />
      </div>
      <div className="w-1/2 mb-4">
        <label htmlFor="lastName" className="block font-medium text-gray-700">
          Lastname
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          className="block w-full px-2 py-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-start mb-4">
        <label htmlFor="male" className="flex items-center font-medium text-gray-700">
          Male
          <input
            type="radio"
            className="w-4 h-4 ml-2 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            name="gender"
            id="male"
            value="male"
            checked={gender === 'male'}
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor="female"
          className="flex items-center font-medium text-gray-700 ml-4">
          Femme
          <input
            type="radio"
            className="w-4 h-4 ml-2 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            name="gender"
            id="female"
            value="female"
            checked={gender === 'female'}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-2 py-2 font-medium text-white text-lg bg-indigo-600 duration-200 hover:bg-indigo-700 rounded-md">
          Envoyer
        </button>
      </div>
      <div className="text-red-500 text-sm">{error}</div>
    </form>
  );
};

export default Form;
