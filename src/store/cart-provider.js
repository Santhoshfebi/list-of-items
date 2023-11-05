import { useState } from "react"

import CartContext from "./cart-context"

export const CartProvider = ({ children }) => {
  const products = [
    {
      name: "iphone 15",
      desc: "Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can track your next ride, see who’s calling, check your flight status and so much more.",
      quantity: 0,
    },
    {
      name: "calculator",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam perspiciatis recusandae soluta doloribus porro delectus accusamus enim dolor.",
      quantity: 0,
    },
    {
      name: "books",
      desc: "I want to show only the first 3 lines of the paragraph below using HTML formatting. I am searching on W3Schools but it doesn't show how to do it.",
      quantity: 0,
    },
    {
      name: "shoe",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam perspiciatis recusandae soluta doloribus porro delectus accusamus enim dolor.",
      quantity: 0,
    },
  ]
  const [cartData, setCartData] = useState(products)

  const addCartData = (item) => {
    setCartData((prevData) => {
      const updatedItem = {
        name: item.name,
        desc: item.desc,
        quantity: 0,
      }
      const updatedData = [...prevData]
      updatedData.push(updatedItem)
      setNewProdState((prevData) => {
        return false
      })
      return updatedData
    })
  }

  const deleteCartData = (itemName) => {
    setCartData((prevData) => {
      const updatedData = prevData.filter((item) => item.name !== itemName)
      return updatedData
    })
  }

  const updateCartData = (field, value) => {
    setCartData((prevData) => {
      const itemIndex = prevData.findIndex((item) => item.name === field)
      const updatedData = [...prevData]
      updatedData[itemIndex].quantity = value
      return updatedData
    })
  }

  const [cartState, setCartState] = useState(false)

  const updateCartState = () => {
    setCartState((prevState) => {
      return !prevState
    })
  }

  const [newProdState, setNewProdState] = useState(false)

  const updateNewProdState = () => {
    setNewProdState((prevState) => {
      return !prevState
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartData,
        updateCartData,
        cartState,
        updateCartState,
        products,
        addCartData,
        newProdState,
        updateNewProdState,
        deleteCartData,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
