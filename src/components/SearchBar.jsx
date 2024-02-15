const SearchBar = () => {

    return (
        <header>
            <div className=" flex relative items-center justify-between ">
                <input
                    type="text"
                    placeholder="Buscar"
                    className=" inline-block overflow-visiblew-full pl-8  text-slate-100 border focus:ring-2 focus:ring-blue-500 text-sm font-bold  py-2 px-2 rounded focus:outline-none focus:shadow-outline" />
                <img
                    className="absolute top-0 bottom-0 w-5 h-6 text-gray-400 mt-2 ml-2"
                    src="/pesquisa.png"
                    alt="Icone Pesquisa" />
            </div>
        </header>
    )

}

export default SearchBar