import { clearCartAction, removeFromCartAction, increaseItemAmoutOfCartAction, decreaseItemAmoutOfCartAction, loadingAction, displayItemsAction, toggleAmountAction, getTotalsAction } from "../actions/cartActions";

const cartReducer = (state, action) => {
    if (action.type === clearCartAction) {
        return { ...state, carts: [] }
    }
    if (action.type === removeFromCartAction) {
        return {
            ...state,
            carts: state.carts.filter((cartItem) => cartItem.id !== action.payload),
        }
    }
    if (action.type === increaseItemAmoutOfCartAction) {
        let tempCart = state.carts.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
        })
        return { ...state, carts: tempCart }
    }
    if (action.type === decreaseItemAmoutOfCartAction) {
        let tempCart = state.carts
            .map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                }
                return cartItem
            })
            .filter((cartItem) => cartItem.amount !== 0)
        return { ...state, carts: tempCart }
    }
    if (action.type === getTotalsAction) {
        let { total, amount } = state.carts.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                cartTotal.amount += amount
                return cartTotal
            },
            {
                total: 0,
                amount: 0,
            }
        )
        total = parseFloat(total.toFixed(2))

        return { ...state, total, amount }
    }
    if (action.type === loadingAction) {
        return { ...state, loading: true }
    }
    if (action.type === displayItemsAction) {
        return { ...state, carts: action.payload, loading: false }
    }
    if (action.type === toggleAmountAction) {
        let tempCart = state.carts
            .map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    if (action.payload.type === 'inc') {
                        return { ...cartItem, amount: cartItem.amount + 1 }
                    }
                    if (action.payload.type === 'dec') {
                        return { ...cartItem, amount: cartItem.amount - 1 }
                    }
                }
                return cartItem
            })
            .filter((cartItem) => cartItem.amount !== 0)
        return { ...state, carts: tempCart }
    }
    throw new Error('no matching action type')
}

export default cartReducer