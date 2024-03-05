import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductCardsap from "../components/ProductCardsap"


const Categorias = () => {

    return (

        <div >
           
            <Header/>

            <div className="flex items-center mx-auto ext-sm lg:flex-grow justify-center lg:justify-start lg:flex-col lg:items-center">
                <ul className=" grid grid-cols-4 ">
                    <li>
                       <ProductCardsap/>
                    </li>
                    <li>
                        <ProductCardsap/>
                    </li>
                    <li>
                        <ProductCardsap/>
                    </li>
                    <li>
                        <ProductCardsap/>
                    </li>
                </ul>
            </div>
            
            <Footer/>

        </div>
    )

}

export default Categorias