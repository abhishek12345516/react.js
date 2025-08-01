import { useState } from 'react';
import products from '../../Product/products.json'
import ProductDetails from './productDetails';
function Product() {
    const [selected,setSelected] = useState(null);
    const handler= (item)=>{
        setSelected(item);
    }
    return ( 
        <div>
            <h3>Product Page</h3>
            <table>
                <thead>
                    <tr>
                        {
                            products.map((item)=>(
                                <td onClick={()=>handler(item)}>
                                    <img src={item.image} height='200' width='200' alt={item.name}/>
                                    
                                </td>
                            ))
                        }
                    </tr>
                </thead>
            </table>
            {
                selected && <ProductDetails selected={selected}/>
            }
        </div>
     );
}

export default Product;