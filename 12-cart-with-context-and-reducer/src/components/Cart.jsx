import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

// step 10: display data
const Cart = () => {
    const { carts } = useContext(CartContext);

    return (<ul className="cart__list">
        {carts.map(cart => <CartItem key={cart.id} cart={cart} />)}
    </ul>);
}

export default Cart;