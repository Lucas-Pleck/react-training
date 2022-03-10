import React, { useEffect, useRef, useState } from 'react';

const FormSimple = () => {
  const [search, setSearch] = useState('');
  const [isFriend, setIsFriend] = useState(false);

  const name = useRef();

  useEffect(() => {
    console.log(search, isFriend);
    // eslint-disable-next-line no-unused-expressions
    search.toLowerCase() === 'easteregg' ? setIsFriend(true) : setIsFriend(false);
  }, [search, isFriend]);

  useEffect(() => {
    console.log('Component created');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
  };

  return (
    <form className="w-1/2 mx-auto p-8 bg-gray-100 shadow" onSubmit={handleSubmit}>
      <div className="w-1/2 mb-4">
        <label htmlFor="movie" className="block font-medium text-gray-700">
          Search
        </label>
        <input
          type="text"
          id="movie"
          className="block w-full px-2 py-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-1/2 mb-4">
        <label htmlFor="name" className="block font-medium text-gray-700">
          Nom
        </label>
        <input
          type="text"
          id="name"
          className="block w-full px-2 py-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ref={name}
        />
        <div className="text-green-500">{isFriend ? 'You win' : 'Lost'}</div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-2 py-2 font-medium text-white text-lg bg-indigo-600 duration-200 hover:bg-indigo-700 rounded-md">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default FormSimple;
