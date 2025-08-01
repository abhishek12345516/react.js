function ProductDetails({selected}) {
    return ( 
        <div>
            <h2>Product Details Page</h2><hr/>
            <h3>Name: {selected.name}</h3>
            <h4>Price: {selected.price}</h4>
            <h4>quantity: {selected.quantity}</h4>
            <img src={selected.image} height='200' width='200'/>
             <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
     );
}

export default ProductDetails;