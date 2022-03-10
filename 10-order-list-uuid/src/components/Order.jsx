/* eslint-disable consistent-return */
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

uuidv4();

const Order = () => {
  const [product, setProduct] = useState('');
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.length < 3) {
      setError('Le produit doit faire au minimum 3 caractères');
      return false;
    }
    // [{id: dfskhfskjdh, value: "Beer"}, {id: dfskhfskjdh, value: "Food"}]
    // map => ['beer', 'food']
    // Indexof vient chercher l'index dans un tableau si il trouve l'index, il retourne l'index entre 0 et ... (si il ne trouve rien, il retourne -1)
    if (
      productList.map((p) => p.value.toLowerCase()).indexOf(product.toLowerCase()) !== -1
    ) {
      setError('Le produit existe déjà dans notre liste');
      return false;
    }
    setError('');
    setProductList([...productList, { id: uuidv4(), value: product }]);
    setProduct('');
  };

  const deleteProduct = (id) => {
    // const index = productList.map(p => p.id).indexOf(id);

    const newArrayOfProduct = [...productList.filter((p) => p.id !== id)];
    // newArrayOfProduct.splice(index, 1);
    setProductList(newArrayOfProduct);
  };

  return (
    <form className="w-1/2 p-8 m-8 mx-auto bg-gray-100 shadow" onSubmit={handleSubmit}>
      <AddProduct product={product} setProduct={setProduct} error={error} />
      <ProductList items={productList} deleteProduct={deleteProduct} />
    </form>
  );
};

export default Order;

/**
 * E-shop:
 * On part du principe qu'on crée un component AddProduct (qui ajoute dans une liste et qui peut supprimer)
 * Cas N°1 : On est sur la route où il y a tous les produits
 * On souhaite ajouter nos produits dans notre wishlist et on peut supprimer nos produits de la wishlist
 *
 * Cas N°2: On est dans le panier
 * On souhaite ajouter nos produits dans notre panier mais pas les supprimer
 *
 */
