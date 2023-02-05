import React from 'react';
import { Link } from "react-router-dom";

const Button = ({ to, children, className }) => (
  <Link to={to} className={`btn ${className}`}>
    {children}
  </Link>
);

const Product = ({ product }) => {
  return (
    <div className="card mb-3 mx-auto" style={{maxWidth: 600}}>
      <img src={product.thumbnail} alt={product.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <div className="d-flex justify-content-center">
          <Button to={`/products/${product.id}`} className="btn-primary m-2">Ver dados</Button>
          <Button to={`/products/edit/${product.id}`} className="btn-warning m-2">Alterar</Button>
          <button className="btn btn-danger m-2">Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default Product;