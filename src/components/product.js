import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Button = ({ to, children, className }) => (
  <Link to={to} className={`btn ${className}`}>
    {children}
  </Link>
);

const Product = ({ product, handleDelete }) => {

  return (
    <div className="card mb-3 mx-auto w-100 justify-content-between" style={{ maxWidth: 800}}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title m-1">{product.title}</h5>
          <div>
            <Button to={`/products/${product.id}`} className="btn m-1">Ver dados</Button>
            <Button to={`/products/edit/${product.id}`} className="btn m-1">Alterar</Button>
            <button onClick={() => handleDelete(product.id)} data-toggle="modal" data-target="#exampleModal" className="btn m-1">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;