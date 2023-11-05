import Card from "./components/card"
import Navbar from "./components/navbar"
import Cart from "./components/cart"
import CartContext from "./store/cart-context"
import { useContext } from "react"
import NewProducts from "./components/newProducts"

function App() {
  const { cartState, updateCartState, newProdState, updateNewProdState } =
    useContext(CartContext)
  return (
    <div className="relative">
      <Navbar />
      <div className="mx-48 mt-10 relative">
        <h1 className="text-4xl">All Products</h1>
        <div className="card_container mt-14 flex flex-wrap gap-6 justify-center">
          <Card />
          <br></br>
        </div>
      </div>
      {cartState && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-100 bg-opacity-50">
          <div
            className="absolute w-screen h-screen z-10"
            onClick={updateCartState}
          ></div>
          <div className="relative w-screen h-screen flex items-center justify-center">
            <div className="bg-white p-2 rounded-lg shadow-lg z-20">
              <Cart />
            </div>
          </div>
        </div>
      )}
      {newProdState && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-100 bg-opacity-50">
          <div
            className="absolute w-screen h-screen z-10"
            onClick={updateNewProdState}
          ></div>
          <div className="relative w-screen h-screen flex items-center justify-center">
            <div className="bg-white w-72 p-2 rounded-lg shadow-lg z-20">
              <NewProducts />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
