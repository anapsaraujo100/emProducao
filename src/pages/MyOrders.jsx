import Header from "../components/Header"
import Footer from "../components/Footer"
import Informacoes from "../components/Informacoes"
import MyCard from "../components/MyCard"

const MyOrders = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Informacoes />
        <MyCard />
      </div>

      <Footer />
    </>
  )
}

export default MyOrders
