/* eslint-disable consistent-return */
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
    console.log(uuidv4());
    if (product.length < 3) {
      setError('Le produit doit faire au minimum 3 caractères');
      return false;
    }
    // ['BeeR', 'Food']
    // map => ['beer', 'food']
    // Indexof vient chercher l'index dans un tableau si il trouve l'index, il retourne l'index entre 0 et ... (si il ne trouve rien, il retourne -1)
    if (productList.map((p) => p.toLowerCase()).indexOf(product.toLowerCase()) !== -1) {
      setError('Le produit existe déjà dans notre liste');
      return false;
    }
    setError('');
    setProductList([...productList, product]);
    setProduct('');
  };

  const deleteProduct = (pToDelete) => {
    const index = productList.indexOf(pToDelete);

    const newArrayOfProduct = [...productList];
    newArrayOfProduct.splice(index, 1);
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
