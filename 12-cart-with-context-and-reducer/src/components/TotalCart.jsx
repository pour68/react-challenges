import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const TotalCart = () => {
    const { total, carts } = useContext(CartContext);

    return (<div className="cart__total">
        <span>Counts: {carts.length}</span>
        <span>Total: {total}</span>
    </div>);
}

export default TotalCart;