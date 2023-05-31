import cartArray from "../data/cart";
import { useState, createContext, useEffect } from "react";
import PropTypes from 'prop-types';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [carts, setCarts] = useState(cartArray);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(carts.reduce((total, current) => total + (current.price * current.amount), 0));
    }, [carts])

    const handleIncreament = (id) => {
        let newCarts = carts.map((cartItem) => {
            if (cartItem.id === id) {
                setTotal();
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
        })

        setCarts(newCarts);
    }

    const handleDecrement = (id) => {
        let newCarts = carts
            .map((cartItem) => {
                if (cartItem.id === id) {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                }
                return cartItem
            })
            .filter((cartItem) => cartItem.amount !== 0);

        setCarts(newCarts);
    }

    return (
        <CartContext.Provider
            value={{ carts, handleDecrement, handleIncreament, total }}
        >
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { CartContext, CartProvider };

