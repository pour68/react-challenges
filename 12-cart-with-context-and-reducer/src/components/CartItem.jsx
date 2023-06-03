import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

// step 10: display data and feed events
const CartItem = (props) => {
    const { cart } = props;
    const { decrease, increase } = useContext(CartContext);

    return (<li className="cart__item">
        <div>
            <img src={cart.img} alt={cart.title} />
        </div>
        <div>{cart.title}</div>
        <div>{cart.price}</div>
        <div>
            <button onClick={() => decrease(cart.id)}>-</button>
            {cart.amount}
            <button onClick={() => increase(cart.id)}>+</button>
        </div>
    </li>);
}

CartItem.propTypes = {
    cart: PropTypes.object
}

export default CartItem;