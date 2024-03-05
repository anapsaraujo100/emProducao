import {Logo} from "./index.js"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

const LogoFooter = ( ) => {

    return (
        <div className="flex flex-col gap-5 pb-5">
            <div className="flex gap-5">
            <Logo size="200"/>
                <section className="text-white font-regular text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </section>
            </div>

            <section className="flex text-base gap-6">
                <FaFacebook />
                <FaInstagram />
                <FaWhatsapp />
            </section>
        </div>
    )
}

export default LogoFooter