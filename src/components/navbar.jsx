import React, { useContext, useEffect, useState } from "react"
import CartContext from "../store/cart-context"

export default function Navbar() {
  const { updateCartState, updateNewProdState } = useContext(CartContext)
  const [date, setDate] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="w-screen h-16  flex items-center justify-evenly">
      <h2 className="text-black/60 text-[20px]"> {date} </h2>
      <div className="flex items-center">
        <button
          className="bg-white h-12 w-32 rounded-lg ms-6 text-black/60 hover:text-black"
          onClick={updateCartState}
        >
          {" "}
          CART{" "}
        </button>
        <button
          className="bg-white h-12 w-36 rounded-lg ms-6 text-black/60 hover:text-black uppercase "
          onClick={updateNewProdState}
        >
          {" "}
          Add Product{" "}
        </button>
      </div>
    </div>
  )
}
