import { Link } from 'react-router-dom'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'

const FormsLogin = ({ onSubmit }) => {
  const safeSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    const name = event.target[0].value
    const email = event.target[1].value
    onSubmit({ name, email })
  }

  return (
    <div className="flex justify-center items-center h-screen">

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={safeSubmit}>
        <div className="mb-4">
          <label
            className="block text-stone-500 text-sm font-bold mb-2"
            htmlFor="email">
            <AiOutlineMail
              className="inline-block align-middle mr-2" />
            E-mail*

          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-500 bg-slate-100 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Digite seu e-mail"
            name="email" />

        </div>

        <div className="mb-6">
          <label
            className="block text-stone-500 text-sm font-bold mb-2"
            htmlFor="password">
            <AiOutlineLock
              className="inline-block align-middle mr-2" />
            Senha*

          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-500 bg-slate-100 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Digite sua senha"
            name="password" />
        </div>

        <div className=" items-center justify-between">
        <a className=" bg-orange-500 text-white rounded-md hover:bg-orange-300 text-sm w-full shadow appearance-none border px-28 py-3 " href="/">
          Fazer Login
          </a>
            
        <div className=" m-3">
          Não possui cadastro?
          <Link to="/signup"
          className=" text-orange-500 hover:text-blue-900">
          Clique aqui
          </Link>
        </div>


        </div>
      </form >

    </div >

  )
}

export default FormsLogin
