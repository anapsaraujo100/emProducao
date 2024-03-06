const MyCard = () => {
  return (
    <div className="pb-3 px-2 flex md:justify-between justify-center text-base mx-8 my-8 ml-12 mr-4 shadow-xl box-border h-[300px] w-[852px] p-4 border-slate-100 bg-slate-100 columns-2 border-4 ">
        <h1 className="font-semibold text-stone-500 text-sm ml-8 relative ">Lista de pedidos</h1>
        <h1 className=" hidden md:block text-stone-500 font-semibold text-sm text-right mr-8" >Status Meus Pedidos</h1>
    </div>
)
}

export default MyCard
