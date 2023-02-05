import React from 'react';
import Product from "./product";

const ProductIndex = ({ products, handleDelete }) => {
  return (
    <>
      <h1 className="text-center">E-commerce</h1>
      <div class="d-flex flex-column">
        {
          products && products.map((product) => (
            <Product handleDelete={handleDelete} key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}

export default ProductIndex;