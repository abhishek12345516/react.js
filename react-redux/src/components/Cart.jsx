import { useSelector, useDispatch } from "react-redux";
import { ADD_ITEM} from "../Redux/Action";

function Cart() {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
     // safe access 

    return (
        <div>
            <h3>Cart Components: {items.length} Items in Cart</h3>
            <div className="row">
                {
                items.map(product => {
                    return (
                        <div className="col-md-3" key={product.id}>
                            <div className="card h-100">
                                <img src={product.image} className="card-img-top" alt={product.title} height="250"/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <h3 className="card-title">Rs.{product.price}</h3>
                                    <p className="card-text">{product.category}</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => dispatch({ type: ADD_ITEM, payload:product})}
                                    >
                                        Add to cart
                                    </button><br/>
                                    
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Cart;
