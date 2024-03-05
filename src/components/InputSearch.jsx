import { IoMdSearch } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { useContext, useState} from "react"
import { ProductContext } from "../context/ProductContext.jsx"

const InputSearch  = () => {
    const [searchKey, setSearchKey] = useState('')
    const [filteredList, setFilteredList] = useState()
    const {products}= useContext(ProductContext)
    const navigate = useNavigate()
    const listFoundItems = () => {
        if(searchKey.length>=2){
            setFilteredList(products.filter((item)=> item.nome.toLowerCase().includes(searchKey.toLowerCase())
            ||item.categoria.toLowerCase().includes(searchKey.toLowerCase())
            ))
        }else{
            setFilteredList("")
        }
        
    }
    const handleSearchInput = (e) => {
        setSearchKey(e.target.value)
        listFoundItems()
    }
    const handleSearchedItemChosen=(id)=>{
        setSearchKey("")
        setFilteredList("")
        navigate(`/produtos/${id}`)
    }
    return (
        <div className="text-stone-500 text-base px-3 w-full md:max-w-[520px] h-11 relative">
            <input className="bg-zinc-50 flex gap-2 w-full left-0 rounded-md
                items-center px-3 absolute h-11
                 outline-none
                  placeholder:text-stone-500 text-sm pl-11"
                placeholder="Buscar"
                onChange={(e) => handleSearchInput(e)}
                value={searchKey}
            />
            <IoMdSearch className="text-2xl absolute h-11 ml-3 left-0" />
            {filteredList&&filteredList.map((itemList)=>(
                <div key={itemList.id} className="flex justify-between w-full bg-zinc-50 text-blue-900 px-4 py-2 shadow-sm z-20 relative top-10"
                onClick={()=>{handleSearchedItemChosen(itemList.id)}}
                >
                   <h1>{itemList.nome}</h1> <span className="text-stone-500 text-xs">Categoria:{itemList.categoria}</span>
                </div>
            ))}

        </div>
    )
}

export default InputSearch