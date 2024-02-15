import { useState } from "react"
import NavMenu from "./NavMenu"

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (

        <nav className="bg-blue-900 text-white p-1 flex items-center justify-between">
            <div className="md:hidden">

                <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className=" md:flex items-center md:justify-center text-white focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        )}
                    </svg>
                </button>
            </div >

            <div className={` md:flex md:items-center  md:justify-center ${isMenuOpen ? 'block' : 'hidden'}`}>
                <NavMenu />
            </div>

        </nav>

    )

}

export default NavBar