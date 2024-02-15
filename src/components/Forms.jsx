import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'

const Forms = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label
                        className="block text-stone-500 text-sm font-bold mb-2"
                        htmlFor="name">
                        <AiOutlineUser
                            className="inline-block align-middle mr-2" />
                        Nome*

                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-500 bg-slate-100 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Digite seu nome"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-stone-500 text-sm font-bold mb-2"
                        htmlFor="email">
                        <AiOutlineMail
                            className="inline-block align-middle mr-2" />
                        E-mail*

                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-500 bg-slate-100 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Digite seu e-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-stone-500 text-sm font-bold mb-2"
                        htmlFor="password">
                        <AiOutlineLock
                            className="inline-block align-middle mr-2"
                        />
                        Senha*

                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-500 bg-slate-100 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Digite sua senha"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-orange-500 hover:bg-blue-900 text-white font-bold w-full py-3 px-2 -mt-2 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Cadastrar
                    </button>
                    <Link
                        className="inline-block align-baseline font-bold text-sm text-stone-900 hover:text-blue-900"
                        to="/login"
                    >
                    </Link>
                </div>

                <div>
                    Já possui cadastro?
                    <Link
                        to="/login"
                        className=" text-orange-500 hover:text-blue-900">
                        Clique aqui
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Forms
