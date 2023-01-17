import logo from '../../../src/assets/images/logo.png';
import '../../assets/style/navbar.css';

function Navbar() {
    return (
      <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <section className="navbarContainer">
           
        </section>
      </nav>
    );
  }
  
  export default Navbar;
  