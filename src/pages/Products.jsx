import Cabecalho from "../components/Cabecalho"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"

const Products = () => {

    return (

        <div >

            <Cabecalho />

            <ul className=" grid grid-cols-6">
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>

            </ul>

            <Footer/>

        </div>

    )

}

export default Products