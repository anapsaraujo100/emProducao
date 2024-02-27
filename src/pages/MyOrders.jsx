import Cabecalho from "../components/Cabecalho"
import Footer from "../components/Footer"
import { TfiLayoutLineSolid } from "react-icons/tfi"

const MyOrders = () => {

    return (

        <div className=" w-screen h-screen">

            <Cabecalho />
            <div className="flex items-center mx-auto justify-center bg-zinc-50 relative">

                <div className=" box-border h-auto w-auto p-4 border-slate-100 bg-slate-100 border-4 ...  mr-4 shadow-xl  ">
                    <h2 className="text-orange-500 font-bold">Meus Pedidos</h2>
                    <TfiLayoutLineSolid />
                    <p className="text-stone-500 font-bold">Minhas Informações</p>

                </div>

                <div className=" box-border h-auto w-auto p-4 border-slate-100 bg-slate-100 border-4 ...  ml-8 mr-46 grid-cols-2 gap-40 flex shadow-xl ">
                    <h2 className="text-stone-500 font-bold">Meus Pedidos</h2>
                    <p className="text-stone-500 font-bold">Status Meus Pedidos</p>
                
                <div className="relative absolute bottom-0 right">
                        <TfiLayoutLineSolid />
                        <img src="./sapato.png"
                            alt="Imagem Produto"
                        />
                        <h2
                            className="text-blue-900 text-base font-bold"
                        >
                            Nique Air Surf
                        </h2>
                        <p
                            className="text-zinc-300"
                        >
                            Tênis
                        </p>
                        <p
                            className="text-orange-500 text-base font-bold"
                        >
                            R$ 200,00
                        </p>
                        <a href=""></a>
                </div>


                </div>
            </div>
            <Footer />

        </div>
    )
}

export default MyOrders