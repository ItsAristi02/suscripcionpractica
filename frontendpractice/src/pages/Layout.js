import { Outlet, Link } from "react-router-dom";
import '../assets/style/navbar.css';
import logo from '../assets/images/logo.png';
import lupa from '../assets/images/lupa.png';
import user from '../assets/images/user.png';
import shoppingCart from '../assets/images/shoppingCart.png';

const Layout = () => {
  return (
    <>
     <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <section className='navigation'>
      <ul className='listContainer'>
				<li><Link to="/">Inicio</Link></li>
				<li><Link to="/">Colecciones</Link></li>
				<li><Link to="/">Accesorios</Link></li>
				<li><Link to="/">Sale</Link></li>
				<li><Link to="/">Contacto</Link></li>
			</ul>
      </section>
      <section className="navbar-container">
        <img src={lupa} id="icon" />
        <img src={user} id="icon" />
        <img src={shoppingCart} id="icon" />
      </section>
    </nav>
    
    <main>
      <section>
      <Outlet />
      </section>
    </main>

      
    </>
  )
};

export default Layout;