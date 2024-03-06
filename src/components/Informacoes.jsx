import { useState } from "react"

const Informacoes = () => {
  const [menuOptionSelected, setMenuOptionSelected] = useState("Meus Pedidos")
  const options = ["Meus Pedidos", "Minhas Informações"]
  const handleSelection = (e) => {
    setMenuOptionSelected(e.target.value)
  }

  return (
    <aside className=" w-full md:max-w-[251px] box-border h-32 p-4 border-slate-100 bg-slate-100 border-4 mx-8 my-8 ml-4 mr-4 shadow-xl">
      <menu className="md:flex flex-col px-6 py-3 hidden md:bg-slate-100 rounded-md">
        {options.map((option, index) => (
          <input
            className={`${
              option === menuOptionSelected ? "text-orange-500" : "stone-500"
            } 
                    text-start py-4 pl-1 text-bold
                     bg-slate-100 
                     w-full ${
                       index !== options.length - 1 &&
                       "border-b-[1px] border-stone-500"
                     }`}
            onClick={(e) => handleSelection(e)}
            value={option}
            key={index}
            type="button"
          />
        ))}
      </menu>
      <select
        className="bg-orange-500 w-full text-center text-zinc-50 text-sm h-12 rounded-md font-semibold mb-6 outline-none md:hidden "
        onChange={(e) => handleSelection(e)}
      >
        <option className="text-orange-500 font-semibold text-xs " value="Meus Pedidos">Meus Pedidos</option>
        <hr className="bg-stone-500 h-px my-4 border-0" />
        <option className="font-semibold text-stone-500 text-sm" value="Minhas Informações">Minhas Informações</option>
      </select>
    </aside>
  )
}
export default Informacoes