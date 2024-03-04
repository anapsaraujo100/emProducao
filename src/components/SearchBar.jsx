import Detach from "./Detach";
import { useState } from "react";
import { produtos } from "./DadosPesquisa";

const SearchBar = () => {
  const [produtosPesquisados, setProdutosPesquisados] = useState([]);

  const handleSearch = (evento) => {
    const textoDigitado = evento.target.value;
    const resultadoPesquisado = produtos.filter((produto) =>
      produto.nome.includes(textoDigitado)
    );
    setProdutosPesquisados(resultadoPesquisado);
  };


  return (
    <div className="flex relative items-center justify-between">
      <input
        className="inline-flex overflow-visiblew-full pl-8 text-gray-400 border focus:ring-2 focus:ring-blue-500 text-sm font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline "
        type="text"
        placeholder="Buscar"
        onChange={handleSearch}
      />
      {produtosPesquisados.map((produto, index) => (
        <Detach 
            key={index} 
            produtos={produto} 
           
        />
      ))}
      <img
        className="absolute top-0 bottom-0 w-5 h-6 text-gray-400 mt-2 ml-2"
        src="/pesquisa.png"
        alt="Icone Pesquisa"
      />
    </div>
  );
};

export default SearchBar;
