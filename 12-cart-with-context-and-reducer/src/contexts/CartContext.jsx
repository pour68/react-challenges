import { useReducer, useEffect, createContext } from 'react'
import cartReducer from '../reducers/cartReducers'
import { sendGetRequest } from '../utils/fetchData'
import PropTypes from "prop-types";
import { removeFromCartAction, increaseItemAmoutOfCartAction, decreaseItemAmoutOfCartAction, loadingAction, displayItemsAction, getTotalsAction } from "../actions/cartActions";

// step 1: create context for cart
const CartContext = createContext();

// step 3: define initial state
const initialState = {
    loading: false,
    carts: [],
    total: 0,
    amount: 0,
}

const CartProvider = ({ children }) => {
    // step 2: use reducer hook
    const [state, dispatch] = useReducer(cartReducer, initialState)

    // step 6: define handlers
    const remove = (id) => dispatch({ type: removeFromCartAction, payload: id })
    const increase = (id) => dispatch({ type: increaseItemAmoutOfCartAction, payload: id })
    const decrease = (id) => dispatch({ type: decreaseItemAmoutOfCartAction, payload: id })
    const fetchData = async () => {
        dispatch({ type: loadingAction });
        const carts = await sendGetRequest('https://course-api.com/react-useReducer-cart-project');
        dispatch({ type: displayItemsAction, payload: carts })
    }

    // step 7: fetch data on page load
    useEffect(() => {
        fetchData()
    }, [])

    // step 8: calculate total
    useEffect(() => {
        dispatch({ type: getTotalsAction })
    }, [state.carts])

    return (
        <CartContext.Provider
            value={{
                ...state,
                remove,
                increase,
                decrease,
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