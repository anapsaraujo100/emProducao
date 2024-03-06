import { Header, Footer } from "../components"
import Order from "../components/Order.jsx"

const MyOrders = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Order/>
      </div>

      <Footer />
    </>
  )
}

export default MyOrders
