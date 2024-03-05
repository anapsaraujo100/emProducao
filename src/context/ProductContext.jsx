import { createContext, useState } from "react"
import {blusa, blusa2, calca, relogio, relogio2, sapato} from "../Assets/index.js"

const ProductContext = createContext(null)

const ProductProvider=({ children }) => {
    const [products, setProducts]=useState([
        { id: 1, nome: 'Blusa Raglan', categoria: 'Blusa', img: {blusa}, valor: "70,00" },
        { id: 2, nome: 'Calça Brim Azul ', categoria: 'Calça', img: {calca}, valor: "70,00" },
        { id: 3, nome: 'Smart Watt', categoria: 'Relogio', img: {relogio}, valor: "270,00" },
        { id: 4, nome: 'Nique Air Surf', categoria: 'Tênis', img: {sapato}, valor: "200,00" },
        { id: 5, nome: 'Blusa Lisa Azul', categoria: 'Blusa', img: {blusa2}, valor: "75,00" },
        { id: 6, nome: 'Relogio Adidas', categoria: 'Relogio', img: {relogio2}, valor: "185,00" }
    ])

    return(
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider}