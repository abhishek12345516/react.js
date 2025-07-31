import products from  '../image/products.json';
function Product() {
    return (
        <div className="row  justify-content-md-center">
            <h1 className='p-2 text-center text-bg-warning'>Featured Products</h1>
            {
                products.map((product ) => (
                    <div className="col" key={product.id}>
                        <div className="card" >
                            <img src={product.image} className="card-img-top" alt={product.name} height='200' width='200'/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.price}</p>
                                    <a href="#" className="btn btn-primary">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default Product;