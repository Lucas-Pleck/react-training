import React from 'react';
import ProductListItem from './ProductListItem';

const ProductList = ({ items, deleteProduct }) => (
  <>
    {items.length === 0 ? <div>Aucun produit a été ajouté</div> : ''}
    {items.map((product) => (
      <ProductListItem
        key={product.id}
        id={product.id}
        product={product.value}
        deleteProduct={deleteProduct}
      />
    ))}
  </>
);

export default ProductList;
