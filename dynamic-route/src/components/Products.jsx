import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await axios.get("https://fakestoreapi.com/products");
      setProducts(resp.data); // ✅ resp.data is already an array
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3" key={product.id}>
          <div className="card">
            <img src={product.image} className="card-img-top" alt={product.title}  height='300'/>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h3 className="card-title">${product.price}</h3>
              <p className="card-text">{product.category}</p>
              <Link to={`/Details/${product.id}`} className="btn btn-primary">View More</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
