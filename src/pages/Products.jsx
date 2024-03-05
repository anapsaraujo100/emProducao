import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import NavCategorias from "../components/NavCategorias"
import { ProductContext } from "../context/ProductContext"

const ProductsId = () => {

    return (

        <div >

            <Header />
            <div className="flex">
                <NavCategorias />

                <ul className=" grid grid-cols-4">
                    <li>
                        <ProductCard produto={ProductContext} />
                    </li>
                    <li>
                        <ProductCard produto={ProductContext}/>
                    </li>
                    <li>
                        <ProductCard produto={ProductContext} />
                    </li>
                    <li>
                        <ProductCard produto={ProductContext}/>
                    </li>
                    <li>
                        <ProductCard produto={ProductContext} />
                    </li>
                    <li>
                        <ProductCard produto={ProductContext} />
                    </li>
                    <li>
                        <ProductCard produto={ProductContext}/>
                    </li>
                    <li>
                        <ProductCard produto={ProductContext}/>
                    </li>

                </ul>
            </div>
            <Footer />

        </div>

    )

}

export default ProductsId