import { Header,Promotion, Detach, Footer } from "../components/index.js"

const Home = () => {

    return (
        <div className="flex flex-col items-center ">
            <Header/>
            <Promotion/>
            <Detach />
            <Footer/>
        </div>
    )

}

export default Home