import Cabecalho from "../components/Cabecalho"
import Footer from "../components/Footer"
import ProductCardRe from "../components/ProductCardRe"
import ProductCardsap from "../components/ProductCardsap"


const Categorias = () => {

    return (

        <div >
           
            <Cabecalho/>

            <div className="flex items-center mx-auto ext-sm lg:flex-grow justify-center lg:justify-start lg:flex-col lg:items-center">
                <ul className=" grid grid-cols-4 ">
                    <li>
                        <ProductCardRe/>
                    </li>
                    <li>
                        <ProductCardRe/>
                    </li>
                    <li>
                        <ProductCardRe/>
                    </li>
                    <li>
                        <ProductCardRe/>
                    </li>
                </ul>
            </div>

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

            <div className="flex items-center mx-auto ext-sm lg:flex-grow justify-center lg:justify-start lg:flex-col lg:items-center">
                <ul className=" grid grid-cols-4 ">
                    <li>
                        <ProductCardRe/>
                    </li>
                    <li>
                        <ProductCardRe/>
                    </li>
                    <li>
                        <ProductCardRe/>
                    </li>
                    <li>
                        <ProductCardRe/>
                    </li>
                </ul>
            </div>
            
            <Footer/>

        </div>
    )

}

export default Categorias