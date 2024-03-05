const MyCard = () => {
  return (
    <div className="mx-8 my-8 ml-16 mr-4 shadow-xl box-border h-[300px] w-[852px] p-4 border-slate-100 bg-slate-100 columns-2 border-4 ... ">
      <div className="text-stone-500 font-semibold text-sm ml-8 relative ">
        Meus Pedidos
      </div>
      <div className=" flex flex-col">
        <div className="pt-8 relative">
          <img src="./sapato.png" alt="Produto Sapato" />

          <div className="absolute left-48 top-16">
            <h2 className="text-blue-900 font-semibold text-sm text-left">
              Nique Air Surf
            </h2>
            <p className="text-xs text-left">Tênis</p>
            <p className="text-orange-500 text-left">R$ 220,00</p>
          </div>

        </div>

        <div className="text-stone-500 font-semibold text-sm text-right mr-8">
          Status Meus Pedidos
          <div className="mt-16 text-green-700">Finalizado</div>
        </div>
      </div>
    </div>
  )
}

export default MyCard
