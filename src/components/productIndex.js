import React from 'react';
import Product from "./product";

const ProductIndex = ({ products }) => {
  return (
    <>
      <h1 className="text-center">List of Products</h1>
      {
        products && products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      }
    </>
  )
}

export default ProductIndex;