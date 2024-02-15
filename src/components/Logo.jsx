import { Link } from 'react-router-dom'

const Logo = ({ size }) => {


    return (
        <Link
            exact="true"
            to="/"
            style={{ display: "block" }} >

            <img src="logo.png"
                alt="Logo Ecommerce"
                width={size} />
        </Link>
    )

}

export default Logo