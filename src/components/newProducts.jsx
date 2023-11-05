import React, { useContext, useState } from "react"
import CartContext from "../store/cart-context"

export default function NewProducts() {
  const { addCartData } = useContext(CartContext)
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
  })

  function handleSubmit(e) {
    e.preventDefault()
    addCartData(formData)
  }

  return (
    <div className="w-3/4 mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4 capitalize">
        Add new product
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            type="text"
            id="lastName"
            name="lastName"
            rows={"6"}
            value={formData.desc}
            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
