import { useState, useEffect } from "react";

function ProductDetail({ selected, onUpdate }) {
  const [product, setProduct] = useState(selected);

  useEffect(() => {
    setProduct(selected);
  }, [selected]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    onUpdate(product); // ✅ Call update from parent
  };

  return (
    <div>
      <h3 className="text-bg-secondary p-2 text-center">Product Details</h3>
      <form onSubmit={handlerSubmit}>
        <div className="form-group mt-3">
          <label>Product Name:</label>
          <input
            type="text"
            className="form-control"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="form-group mt-3">
          <label>Product Price:</label>
          <input
            type="text"
            className="form-control"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div className="form-group mt-3">
          <label>Product Category:</label>
          <input
            type="text"
            className="form-control"
            value={product.category}
            onChange={(e) => setProduct({ ...product, category: e.target.value })}
          />
        </div>
        <button className="btn btn-primary mt-3 w-100">Update Product</button>
      </form>
    </div>
  );
}

export default ProductDetail;
