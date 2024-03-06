import { useContext } from "react"
import { UserContext } from "../context/userContext.jsx"

const Orders = ({ sale }) => {

    const user = useContext(UserContext)
  
    return (

        <details>
            <summary className="py-4 border-t-[1px] mt-4 border-stone-500">
              Compra do dia: {sale.date}
            </summary>
           
            {sale.products.map((product) => (
                <div className="flex flex-col md:flex-row justify-between md:items-center border-t border-stone-500" key={product.id}>
                    <div className="flex gap-4 py-5 ">
                        <img src={product.img} alt={product.name} className="h-20 w-18 rounded-md" />
                        <div className="flex flex-col justify-center">
                            <h1 className="text-black font-bold">{product.name}</h1>
                            <p>{product.category}</p>
                            <span className="text-orange-500 font-semibold">R$ {product.price}</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <h1 className="md:hidden block">Status:</h1>
                        <h1 className={`font-bold text-end ${product.status === "Finalizado" ? "text-green-700" : "text-red-600"}`}>{product.status}</h1>
                    </div>

                </div>
            ))}


        </details>


    )
}

export default Orders