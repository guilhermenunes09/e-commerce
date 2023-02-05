import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Button = ({ to, children, className }) => (
  <Link to={to} className={`btn ${className}`}>
    {children}
  </Link>
);

const Input = ({name, label, value, onChange}) => {
  return (
    <div className="d-flex flex-column" style={{ textAlign: 'left'}}>
      <label className="m-2">{label}</label>
      <input onChange={onChange} name={name} value={value} />
    </div>
  );
}

const ProductEdit = () => {
  const [product, setProduct] = useState();
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(({data}) => {
        setProduct(data);
        setFormData({
          ...formData,
          ...data
        })
      });
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://dummyjson.com/products/${id}`, {body: {...formData }})
      .then(({data}) => {
        alert(`${product.title} atualizado`);
        navigate('/');
      })
  }

  return (
    <>
      <h1>Editando { product && product.title }</h1>
      <div className="mx-auto" style={{ maxWidth: 500}}>
        <form onSubmit={handleSubmit} className="d-flex flex-column justiy-content-start mb-3">
          <Input name="title" label="Titulo" value={formData.title} onChange={handleChange} />
          <Input name="description" label="Descricao" value={formData.description} onChange={handleChange}   />
          <Input name="price" label="Valor" value={formData.price} onChange={handleChange}   />
          <Input name="discountPercentage" label="Porcentagem Desconto" value={formData.discountPercentage} onChange={handleChange} />
          <Input name="rating" label="Avaliacao" value={formData.rating} onChange={handleChange} />
          <Input name="stock" label="Stock" value={formData.stock} onChange={handleChange} />
          <Input name="brand" label="franquia" value={formData.brand} onChange={handleChange} />
          <Input name="category" label="categoria" value={formData.category} onChange={handleChange} />
          <Input name="thumbnail" label="imagem" value={formData.thumbnail} onChange={handleChange} />
          <Input name="images" label="imagens" value={formData.images} onChange={handleChange} />
        </form>
        <Button to={`/`} className=" m-2">Cancelar</Button>
        <button className="btn btn-primary m-2" onClick={handleSubmit} type="submit">Alterar</button>
      </div>
    </>
  )
}

export default ProductEdit;
