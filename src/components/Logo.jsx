import { Link } from 'react-router-dom'
import {logo} from "../Assets/index.js"

const Logo = ({ size }) => {


    return (
        <Link
            exact="true"
            to="/"
            style={{ display: "block" }} >

            <img src={logo}
                alt="Logo Ecommerce"
                width={size} />
        </Link>
    )

}

export default Logo