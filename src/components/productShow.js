import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Button = ({ to, children, className }) => (
  <Link to={to} className={`btn ${className}`}>
    {children}
  </Link>
);

const ProductShow = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(({data}) => {
        setProduct(data);
      });
  }, []);

  return (
    <div className="container my-5 ">
      <h1 className="text-center">{product && product.title}</h1>
      <div className="card mx-auto p-4" style={{width: '40rem'}}>
        <img className='mx-auto' src={product.thumbnail} width={150} />
        <div className="card-body">
          <p className="card-text">{product.description}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Brand: {product.brand}</li>
            <li className="list-group-item">Category: {product.category}</li>
            <li className="list-group-item">Price: ${product.price}</li>
            <li className="list-group-item">Discount: {product.discountPercentage}%</li>
            <li className="list-group-item">Rating: {product.rating}</li>
            <li className="list-group-item">Stock: {product.stock}</li>
          </ul>
        </div>
      </div>
      <Button to={`/`} className="btn-primary m-2">Voltar</Button>
    </div>
  );
};

export default ProductShow;
