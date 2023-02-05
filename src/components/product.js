import React from 'react';
import { Link } from "react-router-dom";

const Button = ({ to, children, className }) => (
  <Link to={to} className={`btn ${className}`}>
    {children}
  </Link>
);

const Product = ({ product }) => {
  return (
    <div className="card mb-3 mx-auto" style={{maxWidth: 300}}>
      <img src={product.thumbnail} alt={product.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        
      </div>
      <div className='card-footer'>
        <div className="d-flex justify-content-center align-items-center">
          <Button to={`/products/${product.id}`} className="btn m-1">Ver dados</Button>
          <Button to={`/products/edit/${product.id}`} className="btn m-1">Alterar</Button>
          <button className="btn m-1">Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default Product;