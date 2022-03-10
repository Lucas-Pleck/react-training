/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const AddProduct = ({ product, setProduct, error }) => (
  <>
    <div className="mb-4">
      <label htmlFor="name" className="block font-medium text-gray-700">
        Produit à ajouter à la liste de course
      </label>
      <input
        type="text"
        className="block w-full px-2 py-1 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        id="name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <div className="text-red-500 text-sm pt-1">{error}</div>
    </div>
    <div className="flex justify-center mb-4">
      <button
        type="submit"
        className="px-3 py-2 font-medium text-white text-lg bg-indigo-600 duration-200 hover:bg-indigo-700 rounded-md">
        Ajouter
      </button>
    </div>
  </>
);

export default AddProduct;
