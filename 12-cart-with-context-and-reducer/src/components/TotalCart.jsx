import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

// step 9: use data
const TotalCart = () => {
    const { total, amount } = useContext(CartContext);

    return (<div className="cart__total">
        <span>Counts: {amount}</span>
        <span>Total: {total}</span>
    </div>);
}

export default TotalCart;