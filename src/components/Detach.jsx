import ProductCard from "./ProductCard";
import { produtos } from "./DadosPesquisa";

const Detach = () => {
  return (
    <>
      <span className="text-blue-900 text-base font-bold ml-4 ">Destaques</span>
      <ul>
        <li className=" grid grid-cols-6 grid-rows-1 gap-4">
          {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </li>

        <li className=" grid grid-cols-6 grid-rows-1 gap-4">
          {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </li>
      </ul>
    </>
  );
};

export default Detach;
