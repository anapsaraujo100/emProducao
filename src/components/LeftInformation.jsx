import { Link } from "react-router-dom"

function LeftInformation() {
    const infosPagina = [
        { id: 1, tittle: "Sobre o E-Rede Store", url: "/sobre" },
        { id: 2, tittle: "Segurança", url: "/segurança" },
        { id: 3, tittle: "Lista de desejos", url: "/lista-de-desejos" },
        { id: 4, tittle: "Trabalhe conosco", url: "/trabalhe-conosco" },
    ]
    return (
        <ul className="font-semibold text-[10px] min-w-32">
            <p className="pb-[14px]">Informações</p>
            {infosPagina.map((info) => (
                <li key={info.id} className="pl-[2px] pb-2">
                    <Link to={info.url} className="text-white font-regular text-[10px]">{info.tittle}</Link>
                </li>
            ))}

        </ul>
    )
}

export default LeftInformation