import { useState, useEffect } from "react"
import {NavBar, Botoes, Logo, SearchBar} from "./index.js"


const Header = ( ) => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

       
        window.addEventListener('resize', handleResize)

       
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
                        <Botoes />
                    </div>

                    <div>
                        <SearchBar />
                    </div>

                </div>

            ) : (

                <div className="flex flex-col items-center justify-between mx-auto">
                    <div className="flex items-center space-x-36">

                        <a href="/"><Logo size={300}/></a>
                        <SearchBar/>

                        <div className="hidden lg:flex">
                            <Botoes/>
                            
                        </div>
                    </div >
                    
                    <div className="flex items-center space-x-4">
                    <NavBar />
                    </div>
                </div>

            )}

        </header>

    )
}

export default Header