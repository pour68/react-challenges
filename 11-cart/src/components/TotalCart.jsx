import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const TotalCart = () => {
    const { total } = useContext(CartContext);

    return (<div className="cart__total">
        Total: {total}
    </div>);
}

export default TotalCart;