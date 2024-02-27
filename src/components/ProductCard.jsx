const ProductCard = () => {

    return (
        <div
            className=" box-border h-69 w-40 p-4 border-slate-100 border-4 ... mx-8 my-8 ml-4 mr-4 shadow-xl"
        >

            <img src="./sapato.png"
                alt="Imagem Produto"
            />
            <h2
                className="text-blue-900 text-base font-bold"
            >
                Nique Air Surf
            </h2>
            <p
                className="text-zinc-300"
            >
                Tênis
            </p>
            <p
                className="text-orange-500 text-base font-bold"
            >
                R$ 200,00
            </p>
            <a href=""></a>

            <button
                className="bg-blue-900 hover:bg-orange-500 text-white font-bold py-2 px-2 mt-2 rounded "
                type="submit"
            >
                Comprar
            </button>

        </div>

    )

}

export default ProductCard