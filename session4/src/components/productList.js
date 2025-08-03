import { useState } from "react";
import ProductDetail from "./productDetail";
import ProductForm from "./productForm";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState(null);
    const addProduct=(obj) => {
        setProducts([...products, obj]);
    }
    const handleDelete=(idToDelete) => {
        setProducts(products.filter(item => item.id !== idToDelete));
    }
     const updateProduct = (updated) => {
    setProducts(products.map(p => p.id === updated.id ? updated : p));
    setSelected(null); // clear selection after update
  };
   const handleSelect = (product) => {
    setSelected(product);
  };
   
    return ( 
        <div>
            <h3 className="text-bg-warning p-2 text-center">Product List</h3>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>
                                    <button className="btn btn-danger float-end" onClick={() => handleDelete(item.id)}>Delete</button>
                                    <button className="btn btn-success float-end me-2" onClick={() => updateProduct(item)}>View</button>
                                    <button onClick={() => handleSelect(item)} className="btn btn-sm btn-info Float-end">Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="row">
                <div className="col">
                    <ProductForm addProduct={addProduct}/>
                </div>
                <div className="col">
                   {selected && <ProductDetail selected={selected} onUpdate={updateProduct}/>}
                </div>
            </div>
        </div>
     );
}

export default ProductList;