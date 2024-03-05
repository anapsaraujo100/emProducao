import { useLocation } from "react-router-dom"
import { LocationFooter, LogoFooter, RightInformation, LeftInformation} from "./index.js"


const Footer = () => {
    const location = useLocation()
    const pathMatches = location.pathname == "/sign-in" || location.pathname == "/sign-up"

    return (
        <div className="bg-blue-900 text-white w-full">
            {!pathMatches ?
                <footer className="p-6 flex flex-col justify-center" >
                    <div className="flex flex-col  pb-0 md:flex-row md:justify-center md:gap-[60px] max-w-[1440px]">
                        <div className="max-w-[292px]">
                            <LogoFooter />
                        </div>
                        <div className="flex md:gap-[60px]">
                            <div className="flex-1">
                                <LeftInformation />

                            </div>
                            <div className="flex-1">
                                <RightInformation />
                            </div>

                        </div>
                        <div className="">
                            <LocationFooter />
                        </div>


                    </div>
                    <hr className="mt-4  px-6" />
                    <span className="mt-4 text-[10px] text-center">2023 Irede</span>
                </footer>
                : <>teste</>
            }
        </div>


    )
}

export default Footer