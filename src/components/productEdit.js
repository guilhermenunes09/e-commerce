import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

const Button = ({ to, children, className }) => (
  <Link to={to} className={`btn ${className}`}>
    {children}
  </Link>
);

const Input = ({name, label, value, onChange}) => {
  return (
    <div>
        <label className="m-2">{label}</label>
        <input onChange={onChange} name={name} value={value} />
    </div>
  );
}

const ProductEdit = () => {
  const [product, setProduct] = useState();
  const [formData, setFormData] = useState({});
  const { id } = useParams();



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
  }

  return (
    <>
      <h1>Page Product Edit</h1>
      <div>
        <form onSubmit={handleSubmit} className="d-flex flex-column ">
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
          <button type="submit">Alterar</button>
        </form>
        <Button to={`/`} className="btn-primary m-2">Voltar</Button>
      </div>
    </>
  )
}

export default ProductEdit;