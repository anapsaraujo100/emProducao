import Cabecalho from "../components/Cabecalho"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import NavCategorias from "../components/NavCategorias"
import { produtos } from "../components/DadosPesquisa"

const Products = () => {

    return (

        <div >

            <Cabecalho />
            <div className="flex">
                <NavCategorias />

                <ul className=" grid grid-cols-4">
                    <li>
                        <ProductCard produto={produtos} />
                    </li>
                    <li>
                        <ProductCard produto={produtos}/>
                    </li>
                    <li>
                        <ProductCard produto={produtos} />
                    </li>
                    <li>
                        <ProductCard produto={produtos}/>
                    </li>
                    <li>
                        <ProductCard produto={produtos} />
                    </li>
                    <li>
                        <ProductCard produto={produtos} />
                    </li>
                    <li>
                        <ProductCard produto={produtos}/>
                    </li>
                    <li>
                        <ProductCard produto={produtos}/>
                    </li>

                </ul>
            </div>
            <Footer />

        </div>

    )

}

export default Products