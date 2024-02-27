import Logo from "./Logo"
import { LiaFacebook, LiaMinusSolid } from "react-icons/lia"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-4 relative items-center justify-between px-4 w-full md:grid md:grid-cols-3 md:gap-4 h-auto">
            <div className=" flex md:col-span-1 md:mr-4">
                <ul className="flex items-center px-6">
                    <li className="mr-4 absolute inset-x top-8"><Logo size={60} /></li>
                    <li className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <LiaFacebook />
                            <FaInstagram />
                            <FaWhatsapp />
                        </div>

                        <p className="text-gray-400 text-xs -mt-8  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, cum aliquam. At reiciendis inventore.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:col-span-2 md:justify-center">
                <ul>
                    <li>
                        <h3 className="text-xs">Informações</h3>
                    </li>
                    <li>
                        <a className="text-gray-400 text-xs" href="#">Sobre o E-Rede Store</a>
                    </li>
                    <li>
                        <a className="text-gray-400 text-xs" href="#">Segurança</a>
                    </li>
                    <li>
                        <a className="text-gray-400 text-xs" href="#">Lista de desejos</a>
                    </li>
                    <li>
                        <a className="text-gray-400 text-xs" href="#">Trabalhe Conosco</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h3 className="text-xs">Produtos</h3>
                    </li>
                    <li>
                        <a className="text-gray-400 text-xs" href="#">Tênis</a>
                    </li>
                    <li>
                        <a className="text-gray-400 text-xs" href="#">Camiseta</a>
                    </li>
                    <li>
                        <a className="text-gray-400 text-xs" href="#">Acessórios</a>
                    </li>
                    <li>
                        <a className="text-gray-400 text-xs" href="#">Esportivo</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h3 className="text-xs ml-8">Localização</h3>
                    </li>
                    <li>
                        <p className="text-gray-400 text-xs ml-8">Rua Martinho Rodrigues, 331</p>
                    </li>
                    <li>
                        <p className="text-gray-400 text-xs ml-8">Bairro de Fátima, Fortaleza-CE</p>
                    </li>
                </ul>
            </div>
            <div className="md:hidden col-start-1 col-end-4 items-center">
                <LiaMinusSolid />
                <p className="text-gray-400 text-xs text-center">2023 Irede</p>
            </div>
        </footer>
    )
}

export default Footer