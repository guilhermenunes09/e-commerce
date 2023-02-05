import React from 'react';
import Product from "./product";

const ProductIndex = ({ products }) => {
  return (
    <>
      <h1 className="text-center">E-commerce</h1>
      <div class="d-flex align-content-start flex-wrap">
        {
          products && products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}

export default ProductIndex;