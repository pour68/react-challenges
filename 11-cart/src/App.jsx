import './App.css'
import Cart from './components/Cart'
import TotalCart from './components/TotalCart'

function App() {
  return (
    <div className="cart">
      <div className="cart__container container">
        <TotalCart />
        <Cart />
      </div>
    </div>
  )
}

export default App
