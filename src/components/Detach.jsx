import ProductCard from "./ProductCard"
import { produtos } from "./DadosPesquisa"

const Detach = () => {
  return (
    <div className="w-[87vw] min-w-[30vw] ml-16 mr-16 ">
      <span className="text-blue-900 text-lg font-bold w-[87vw] min-w-[116vw] ml-12 mr-16 ">Destaques</span>
      <section className=" flex flex-wrap">
     
          {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
      
      </section>
    </div>
  )
}

export default Detach
