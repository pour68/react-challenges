import { removeFromCartAction, increaseItemAmoutOfCartAction, decreaseItemAmoutOfCartAction, loadingAction, displayItemsAction, getTotalsAction } from "../actions/cartActions";

// step 5: implement reducer actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case removeFromCartAction:
            return {
                ...state,
                carts: state.carts.filter((cartItem) => cartItem.id !== action.payload),
            }
        case increaseItemAmoutOfCartAction:
            {
                let tempCart = state.carts.map((cartItem) => {
                    if (cartItem.id === action.payload) {
                        return { ...cartItem, amount: cartItem.amount + 1 }
                    }
                    return cartItem
                });

                return { ...state, carts: tempCart }
            }
        case decreaseItemAmoutOfCartAction:
            {
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
        case getTotalsAction:
            {
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
        case loadingAction:
            return { ...state, loading: true }
        case displayItemsAction:
            return { ...state, carts: action.payload, loading: false }
        default:
            return { ...state }
    }
}

export default cartReducer