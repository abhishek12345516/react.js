import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    const fetchData = async () => {
        try {
            const resp = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(resp.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    },[])
    return ( 
        <div className="container">
            <img src={product.image} alt={product.title}  height='200' width='200'/>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
        </div>
     );
}

export default Details;