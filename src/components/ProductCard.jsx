const ProductCard = ({ produto }) => {

  return (

    <div className="box-border h-[285px] w-[176px] p-4 border-slate-100 my-4 border-4 mx-4 ml-4 mr-4 shadow-xl">
      <img src={produto.src} alt="Imagem Produto" className="w-[176px] h-[134px]" />
      <h2 className="text-blue-900 text-base font-bold">{produto.nome}</h2>
      <p className="text-zinc-300">{produto.categoria}</p>
      <p className="text-orange-500 text-base font-bold">{produto.valor}</p>
      <button
        className="bg-blue-900 hover:bg-orange-500 text-white font-bold py-2 px-2 mt-2 rounded mb-32"
        type="submit"
      >
        Comprar
      </button>
    </div>
  )
}

export default ProductCard
