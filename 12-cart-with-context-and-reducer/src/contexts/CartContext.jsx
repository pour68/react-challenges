import React, { useReducer, useEffect } from 'react'
import cartReducer from '../reducers/cartReducers'
import { sendGetRequest } from '../utils/fetchData'
import PropTypes from "prop-types";
import { clearCartAction, removeFromCartAction, increaseItemAmoutOfCartAction, decreaseItemAmoutOfCartAction, loadingAction, displayItemsAction, toggleAmountAction, getTotalsAction } from "../actions/cartActions";

const CartContext = React.createContext();

// step 2: define initial state
const initialState = {
    loading: false,
    carts: [],
    total: 0,
    amount: 0,
}

const CartProvider = ({ children }) => {
    // step 1: use reducer hook
    const [state, dispatch] = useReducer(cartReducer, initialState)

    // step 5: define handlers
    const clearCart = () => dispatch({ type: clearCartAction })
    const toggleAmount = (id, type) => dispatch({ type: toggleAmountAction, payload: { id, type } })

    const remove = (id) => dispatch({ type: removeFromCartAction, payload: id })
    const increase = (id) => dispatch({ type: increaseItemAmoutOfCartAction, payload: id })
    const decrease = (id) => dispatch({ type: decreaseItemAmoutOfCartAction, payload: id })
    const fetchData = async () => {
        dispatch({ type: loadingAction });
        const carts = await sendGetRequest('https://course-api.com/react-useReducer-cart-project');
        dispatch({ type: displayItemsAction, payload: carts })
    }

    // step 6: fetch data on page load
    useEffect(() => {
        fetchData()
    }, [])

    // step 7: calculate total
    useEffect(() => {
        dispatch({ type: getTotalsAction })
    }, [state.carts])

    return (
        <CartContext.Provider
            value={{
                ...state,
                clearCart,
                remove,
                increase,
                decrease,
                toggleAmount,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { CartContext, CartProvider }