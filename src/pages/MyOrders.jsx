import Cabecalho from "../components/Cabecalho"
import Footer from "../components/Footer"
import Informacoes from "../components/Informacoes"
import MyCard from "../components/MyCard"

const MyOrders = () => {
  return (
    <>
      <Cabecalho />
      <div className="flex">
        <Informacoes />
        <MyCard />
      </div>

      <Footer />
    </>
  )
}

export default MyOrders
