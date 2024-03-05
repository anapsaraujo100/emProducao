import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { UserContext } from "../context/userContext"

const ProductCard = ({ produto }) => {
  const { cart, setCart } = useContext(CartContext)
  const { user } = useContext(UserContext) || {}
  const navigate = useNavigate()

  const handleCart = (product) => {
    if (user) {
      if (cart) {
        let cartLocal = cart
        let indexProd = cartLocal.products.findIndex(
          (item) => item.product_id === product.id
        )
        if (indexProd > -1) {
          let products = []
          cartLocal.products.forEach((product, index) => {
            if (index !== indexProd) {
              products.push(product);
            }
          })
          setCart((previous) => ({
            ...previous,
            products: [
              ...products,
              {
                product_id: product.id,
                qtt: (cartLocal.products[indexProd].qtt += 1),
              },
            ],
          }))
        } else {
          setCart((previous) => ({
            ...previous,
            products: [...cartLocal.products, { product_id: product.id, qtt: 1 }],
          }))
        }
      } else {
        setCart({
          id_user: user.id,
          products: [
            {
              product_id: product.id,
              qtt: 1,
            },
          ],
        })
      }
    } else {
      navigate("/login")
    }
  }
  return (
    <div className=" shadow-sm  md:w-36 md:h-65 rounded-md bg-white box-border p-2 border-slate-100 my-2 border-2 ml-4 mr-4 ">
      <img
        src={produto.img}
        alt="card produto "
        className="h-24 md:h-32 w-44 object-cover"
      />
      <div className="px-3 py-2 ">
        <h1 className="text-blue-900 font-bold">{produto.nome}</h1>
        <span className="text-stone-500">{produto.categoria}</span>
        <h3 className="text-orange-500 font-semibold">{produto.valor}</h3>
        <button
          className="bg-blue-900 text-white w-20 h-6 rounded-md text-center text-[12px] "
          onClick={() => handleCart(produto)}
        >
          {" "}
          Comprar{" "}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
