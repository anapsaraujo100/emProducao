import { NavLink, useLocation } from "react-router-dom"
import { useState } from "react"

const NavMenu = () => {
    const location = useLocation()
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <nav className={`flex items-center justify-between p-4 ${theme === "light" ? "bg-blue-900" : "bg-blue-900"}`}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <button onClick={toggleTheme}></button>
            </div>
            <div className="text-sm lg:flex-grow flex justify-center lg:justify-start lg:flex-col lg:items-center">
                <div className="text-sm lg:flex-grow content-between">
                    <NavLink
                        exact="true"
                        to="/"
                        className={`block mt-4 lg:inline-block place-items-center lg:mt-0 text-sm px-8 place-content-between content-between hover:text-orange-500 mr-4 ${location.pathname === "/" ? theme === "light" ? "text-orange-500" : "text-yellow-500" : ""}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/produtos"
                        className={`block place-self-center mt-4 lg:inline-block place-items-center lg:mt-0 px-8 place-content-between hover:text-orange-500 content-between mr-4 ${location.pathname === "/produtos" ? theme === "light" ? "text-orange-500" : "text-yellow-500" : ""}`}
                    >
                        Produtos
                    </NavLink>
                    <NavLink
                        to="/categorias"
                        className={`block place-self-center mt-4 lg:inline-block place-items-center lg:mt-0 px-8 place-content-between hover:text-orange-500  content-betweenmr-4 ${location.pathname === "/categorias" ? theme === "light" ? "text-orange-500" : "text-yellow-500" : ""}`}
                    >
                        Categorias
                    </NavLink>
                    <NavLink
                        to="/pedidos"
                        className={`block mt-4 lg:inline-block place-items-center lg:mt-0 px-8 place-content-between items-center hover:text-orange-500 content-between mr-4 ${location.pathname === "/pedidos" ? theme === "light" ? "text-orange-500" : "text-yellow-500" : ""}`}
                    >
                        Meus Pedidos
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavMenu
