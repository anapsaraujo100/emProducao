import { Link } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md"
import { useContext, useState, useEffect } from "react"
import { UserContext } from "../context/userContext.jsx"
import { CartContext } from "../context/CartContext.jsx"
import {Cart} from "./index.js"

const Botoes = () => {
    const { user } = useContext(UserContext) || { user: false }
    const { cart } = useContext(CartContext) || {cart: {products: [ ]}}
    const [totalItemsCart, setTotalItemsCart] = useState(0)

    useEffect(() => {
        let total = 0
        cart?.products.forEach((product) => {
            total += product.qtt
        })
        setTotalItemsCart(total)
    }, [cart])

    return (
        <div className="flex justify-center items-center md:w-full max-w-[289px] gap-5">
            {user ?
                <div className="flex items-center justify-center gap-5">
                    <img src={user.avatar} alt={user} className="h-10 w-10 rounded-full hidden lg:block" />
                    <h1 className="hidden lg:block">Olá , {user.name}</h1>
                </div>

                :
                <>
                    <Link to="/signup" className="hidden md:flex text-sm h-10 w-32 py-3 ">Cadastre-se</Link>
                    <Link to="/login" className="bg-orange-500 hover:bg-orange-300 focus:outline-none focus:shadow-outline h-10 w-32 rounded-lg items-center justify-center hidden md:flex text-sm ">Entrar</Link>
                </>

            }
            <div className="flex items-center justify-center">
                <button className="peer absolute">
                    <MdOutlineShoppingCart className="text-white text-2xl ml-32" />
                </button>

                {totalItemsCart > 0 &&
                    <div className="h-2 w-2 flex justify-center items-center rounded-full relative -top-4 -right-2 bg-red-500 p-3 ">{totalItemsCart} </div>
                }
                <div className="peer-focus:block hidden">
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default Botoes