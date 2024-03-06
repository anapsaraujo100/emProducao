import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext.jsx"
import { Informacoes, MyCard } from "./index.js"
import { sapato, blusa, relogio, calca } from "../Assets/index.js"
import Orders from "./Orders.jsx"

const Order = () => {
  const userContext = useContext(UserContext)
  const user = userContext ? userContext.user : null

  const [sales, setSales] = useState([])

  useEffect(() => {
    const handleOrdersFetch = (id) => {
      if (id && id === 1233) {
        setSales([
          {
            id: 1,
            products: [
              { id: 1, img: blusa, name: "Blusa Raglan Dry", category: "Tênis", price: "75,90", status: "Finalizado" },
              { id: 2, img: sapato, name: "Nique Air Surf", category: "Tênis", price: "220,00", status: "Esperando Pagamento" }
            ],
            date: "08/03/2024"
          },
          {
            id: 2,
            products: [
              { id: 1, img: calca, name: "Calça Brim Azul", category: "Tênis", price: "89,90", status: "Finalizado" },
              { id: 2, img: relogio, name: "Relogio Smart Watt", category: "Tênis", price: "270,00", status: "Esperando Pagamento" }
            ],
            date: "08/03/2024"
          }
        ])
      } else {
        setSales([])
      }
    }

   if (user && user.id) {
    handleOrdersFetch(user.id)
  }
}, [user])
  return (
    <main className="flex flex-col md:flex-row bg-white text-stone-500 w-screen md:px-2 md:py-8 md:gap-1">
      <Informacoes />
      <MyCard />
        {sales.map((sale) => (
          <Orders key={sale.id} sale={sale} />
        ))}
    </main>
  )
}

export default Order
