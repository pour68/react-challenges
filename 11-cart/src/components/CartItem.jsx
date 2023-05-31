import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartItem = (props) => {
    const { cart } = props;
    const { handleDecrement, handleIncreament } = useContext(CartContext);

    return (<li className="cart__item">
        <div>
            <img src={cart.img} alt={cart.title} />
        </div>
        <div>{cart.title}</div>
        <div>{cart.price}</div>
        <div>
            <button onClick={() => handleDecrement(cart.id)}>-</button>
            {cart.amount}
            <button onClick={() => handleIncreament(cart.id)}>+</button>
        </div>
    </li>);
}

CartItem.propTypes = {
    cart: PropTypes.object
}

export default CartItem;