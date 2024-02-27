const NavCategorias = () => {

  return (

    <nav className="box-border h-[236px] w-[251px] p-2 border-2 ml-16 mr-16 mt-16 drop-shadow-lg...">
      <legend className="text-orange-500 font-bold">Categorias</legend>
      <ul>
        <li>
          <input id="tenis" className="peer/tenis" type="radio" name="status" checked />
          <label for="tenis" className="peer-checked/draft:text-orange-500 font-bold ">Tênis</label>
          <div className="hidden peer-checked/tenis:block">Tenis</div>
        </li>
        <li>
          <input id="blusa" className="peer/blusa" type="radio" name="status" />
          <label for="blusa" className="peer-checked/blusa:text-orange-500 font-bold">Blusa</label>
          <div className="hidden peer-checked/blusa:block">Blusa</div>
        </li>
        <li>
          <input id="acessorio" className="peer/acessorio" type="radio" name="status" />
          <label for="acessorio" className="peer-checked/acessorio:text-orange-500 font-bold">Acessórios</label>
          <div className="hidden peer-checked/acessorio:block">Acessorio.</div>
        </li>
        <li>
          <input id="calcas" className="peer/calcas" type="radio" name="status" />
          <label for="calcas" className="peer-checked/calcas:text-orange-500 font-bold">Calças</label>
          <div className="hidden peer-checked/calcas:block">Calças</div>
        </li>

      </ul>

    </nav>

  )
}

export default NavCategorias
