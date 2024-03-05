import { useState, useEffect } from 'react'


const Promotion = () => {
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
        <header className="relative">
            <img src={isMobile ? "Pro-mobile.png" : "banner.png"} alt="Banner Promocional" className="w-full h-[540px]"/>
            {isMobile ? (
                <a className="absolute items-center justify-between text-white top-96 item-center-beetwek text-center mx-8 max-w-96 text-sm px-12 font-bold py-3  bg-orange-500 rounded-md hover:bg-orange-300 inline-block focus:outline-none focus:shadow-outline" href="/produtos">Aproveitar Oferta</a>
            ) : (
                <a className="absolute text-white top-96 right-20 mr-60 text-sm px-20 py-4 bg-orange-500 rounded-md hover:bg-orange-300 inline-block" href="/produtos">Aproveitar Oferta</a>
            )}
        </header> 
    )
}

export default Promotion