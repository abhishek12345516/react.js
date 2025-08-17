import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../Redux/Action";



function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

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
        <div className="col-md-4 "  style={{ width: '19rem' }}  key={product.id}>
          <div className="border border-dark">
            <img src={product.image} className="card-img-top" alt={product.title}  height='250'/>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h3 className="card-title">${product.price}</h3>
              <p className="card-text">{product.category}</p>
           <button className="btn btn-primary"
           onClick={()=>dispatch({type:ADD_ITEM,payload:product.id})}>Add to cart</button><br/>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
