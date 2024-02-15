import { useState, useEffect } from "react"
import NavBar from "./Navbar"
import ShoppCart from "./ShoppCart"
import Logo from "./Logo"
import SearchBar from "./SearchBar"

const Cabecalho = ({ user }) => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        // Adiciona redimensionamento da janela
        window.addEventListener('resize', handleResize)

        // Remove o event listener quando o componente é desmontado
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (

        <header className="bg-blue-900 text-white py-3 flex flex-col md:flex-row items-center justify-center md:justify-between px-2 md:px-8 w-full h-[120px] md:h-auto">

            {isMobile ? (
                <div className=" text-slate-100 bg-blue-900 flex flex-col py-3">
                    <div className="flex items-center justify-between px-1 mb-4" >
                        <NavBar />
                        <Logo size={60} />
                        <ShoppCart />
                    </div>

                    <div>
                        <SearchBar />
                    </div>

                </div>

            ) : (

                <div className="flex flex-col items-center justify-between mx-96">
                    <div className="flex items-center space-x-12">

                        <a href="/"><Logo size={60}/></a>
                        <SearchBar/>

                        <div className="hidden lg:flex">
                            <a href="/signup"
                                className="text-sm px-4 mr-6 mt-2">
                                Cadastre-se
                            </a>
                            <a className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-300 text-sm mr-4"
                                href="/login">
                                Entrar
                            </a>
                        </div>
                        <a href="/cart">
                            <ShoppCart />
                        </a>

                    </div >
                    
                    <div className="flex items-center space-x-4">
                    <NavBar />
                    </div>
                </div>

            )}

        </header>

    )
}

export default Cabecalho