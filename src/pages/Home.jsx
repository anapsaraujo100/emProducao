import Header from "../components/Header"
import Cabecalho from "../components/Cabecalho"
import Footer from "../components/Footer"
import Detach  from "../components/Detach"

const Home = () => {

    return (
        <div className="flex flex-col items-center ">
            <Cabecalho/>
            <Header/>
            <Detach />
            <Footer/>
        </div>
    )

}

export default Home