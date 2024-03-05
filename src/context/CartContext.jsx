import { createContext, useEffect, useState } from "react"

const defaultCartValue = JSON.parse(localStorage.getItem("cart")) || {} // Valor padrão

const CartContext = createContext(defaultCartValue)


const CartProvider=({ children })=> {
    const [cart, setCart] = useState(defaultCartValue)

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart))
      
    }, [cart])

    
    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )

}

export { CartContext, CartProvider}