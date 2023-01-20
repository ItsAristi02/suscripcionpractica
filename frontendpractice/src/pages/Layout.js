import { Outlet, Link } from "react-router-dom";
import '../assets/style/navbar.css';
import logo from '../assets/images/logo.png';
import lupa from '../assets/images/lupa.png';
import user from '../assets/images/user.png';
import shoppingCart from '../assets/images/shoppingCart.png';
import Footer from '../components/helpers/Footer.js'
import Marcas from '../components/helpers/Marcas.js'



const Layout = () => {
  return (
    <>
     <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <section className='navigation'>
      <ul className='listContainer'>
				<li><Link to="/">Inicio</Link></li>
        <li><Link to="/Informes">Informes</Link></li>
        <li><Link to="/Colecciones">Colecciones</Link></li>
				<li><Link to="/">Mujer</Link></li>
				<li><Link to="/">Hombre</Link></li>
				<li><Link to="/">Sale</Link></li>
			</ul>
      </section>
      <section className="navbar-container">
        <img src={lupa} id="icon" alt=""/>
        <img src={user} id="icon" alt=""/>
        <img src={shoppingCart} id="icon" alt="" />
      </section>
    </nav>
    
    <main className="main">
        <section>
        <Outlet />
        </section>
    </main>
    
    <Marcas />
    <Footer />

      
    </>
  )
};

export default Layout;