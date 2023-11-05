import React, { useContext } from 'react'
import CartContext from '../store/cart-context'

export default function Cart() {
  const {cartData} = useContext(CartContext)
  return (
    <table className="shadow-lg bg-white">
      <thead>
        <th className="bg-blue-100 border text-left px-8 py-4">Item</th>
        <th className="bg-blue-100 border text-left px-8 py-4">Quantity</th>
      </thead>
      <tbody>
        {cartData
          .filter((c) => c.quantity > 0)
          .map((c) => (
            <tr>
              <td className="border px-8 py-4 capitalize font-semibold">{c.name}</td>
              <td className="border px-8 py-4 font-semibold">{c.quantity}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}