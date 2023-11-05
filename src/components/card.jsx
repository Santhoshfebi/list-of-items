import { useContext } from "react"
import CartContext from "../store/cart-context"

export default function Card() {
  const { cartData, updateCartData, deleteCartData } = useContext(CartContext)
  return (
    <div className="card_container mt-14 flex flex-wrap gap-6 justify-center">
      {cartData.map((c) => {
        return (
          <>
            <div
              key={c.name}
              className="h-64 w-80 rounded-xl hover:scale-110 hover:border-2 hover:bg-white hover:border-black bg-cyan-100 p-4 flex flex-col justify-between"
            >
              <h1 className="text-base font-bold capitalize">{c.name}</h1>
              <p className="limit_text">{c.desc}</p>
              <div className="options flex justify-between">
                <button
                  onClick={() => updateCartData(c.name, c.quantity + 1)}
                  className="h-8 w-32 bg-green-300 rounded-lg "
                >
                  {" "}
                  ADD TO CART{" "}
                </button>
                <button
                  onClick={() => deleteCartData(c.name)}
                  className="h-8 w-32 bg-rose-300 rounded-lg uppercase"
                >
                  {" "}
                  Delete item{" "}
                </button>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}
