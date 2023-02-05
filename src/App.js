import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductIndex from './components/productIndex';
import ProductShow from './components/productShow';
import ProductEdit from './components/productEdit';

/*

{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "...",
  "images": ["...", "...", "..."]
}

*/

const ALL_PRODUCTS = {
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "...",
      "images": ["...", "...", "..."]
    },
    {
      "id": 2,
      "title": "iPhone 19",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "...",
      "images": ["...", "...", "..."]
    }
  ],
  "total": 100,
  "skip": 0,
  "limit": 30
}

function App() {
  const [products, setProducts] = React.useState(ALL_PRODUCTS)

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(({data}) => {
        setProducts(data);
      })
  },[]);

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<ProductIndex products={products.products} />} />
        <Route exact path='products/:id' element={<ProductShow />} />
        <Route exact path='products/edit/:id' element={<ProductEdit />} />
      </Routes>
    </div>
  );
}

export default App;
