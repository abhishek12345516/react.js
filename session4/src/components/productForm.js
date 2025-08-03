import { useState } from "react";

function ProductForm({addProduct}) {
    const [product,setProduct]=useState({name:'',price:'',category:''});
    const handlerSubmit=(e)=>{
        e.preventDefault();
        product.id=Date.now();
        addProduct(product);
        setProduct({name:'',price:'',category:''});
        
    }
    return ( 
        <div>
            <h3 className="text-bg-secondary p-2 text-center">Product Form</h3>
            <form onSubmit={handlerSubmit}>
                <div className="form-group mt-3">
                    <label>Product Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Product Name" 
                    value={product.name} onChange={(e)=>setProduct({...product,name:e.target.value})}/>
                </div>
                <div className="form-group mt-3">
                    <label>Product Price:</label>
                    <input type="text" className="form-control" placeholder="Enter Product price" 
                    value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})}/>
                </div>
                <div className="form-group mt-3">
                    <label>Product Category:</label>
                    <input type="text" className="form-control" placeholder="Enter Product Category"
                    value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})}/>
                </div>
                <button  className="btn btn-primary mt-3 w-100">Add Product</button>
            </form>
        </div>
     );
}

export default ProductForm;