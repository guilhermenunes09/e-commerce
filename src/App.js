import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductIndex from './components/productIndex';
import ProductShow from './components/productShow';
import ProductEdit from './components/productEdit';


function App() {
  const [products, setProducts] = React.useState([]);
  const [itemToDelete, setItemToDelete] = React.useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(({data}) => {
        setProducts(data);
      })
  },[]);

  const handleDelete = (id) => {
    setItemToDelete(id);
    
  }

  const confirmDelete = () => {
    axios.delete(`https://dummyjson.com/products/${itemToDelete}`)
      .then(({data}) => {
        alert(`deleted`);
      })
  }

  return (
    <div className='App'>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Tem certeza que deseja deletar este item?
            </div>
            <div className="modal-footer justify-content-center">
              <button onClick={confirmDelete} type="button" className="btn btn-primary" data-dismiss="modal">Sim</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Não</button>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path='/' element={<ProductIndex handleDelete={handleDelete} products={products.products} />} />
        <Route exact path='products/:id' element={<ProductShow />} />
        <Route exact path='products/edit/:id' element={<ProductEdit />} />
      </Routes>
    </div>
  );
}

export default App;
