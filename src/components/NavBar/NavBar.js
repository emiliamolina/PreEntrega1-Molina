import logo from './assets/logo.svg'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
        <div>
        <h1 className='text-start p-2'>PlanBodas</h1>
        <img className='img-thumbnail img-fluid rounded float-start' src={logo} alt="logo" width={50}/>
        </div>
        <div>
            <button className="btn-primary btn-lg">Catering</button>
            <button className="btn-primary btn-lg">Decoración</button>
            <button className="btn-primary btn-lg">Musicalización</button>
            <button className="btn-primary btn-lg">Animación</button>
            <button className="btn-primary btn-lg">Mesa Dulce</button>
        </div>
        <CartWidget/>
        </nav>
    )
}

export default NavBar