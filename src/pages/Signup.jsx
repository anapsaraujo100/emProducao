import Forms from "../components/Forms"
import Logo from "../components/Logo"

const Signup = () => {

    return (

        <div className=" flex justify-center items-center w-full h-screen">


            <div className="bg-slate-100 w-1/2 flex justify-center items-center" >
                <Forms />
            </div>

            <div className="bg-blue-900 w-1/2 h-screen flex flex-col justify-center items-center" >
                <h2 className="text-white text-2xl justify-center mb-5 w-96 ">
                    Sua nova experiência em compras online
                </h2>
                <Logo size="389px"
                    className="justify-center items-center justify-items-center" />
            </div>


        </div>

    )

}

export default Signup