import { 
  BrowserRouter,
  Routes, 
  Route, 
} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Categorias from './pages/Categories'
import MyOrders from './pages/MyOrders'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/pedidos" element={<MyOrders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
