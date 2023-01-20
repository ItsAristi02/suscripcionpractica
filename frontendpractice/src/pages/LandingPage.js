import '../assets/style/landPage.css';
import {Link} from "react-router-dom";



const LandingPage = () => {
    return (
        <section className="hero">
            
            <section className='heroText' id='filter'>
                <section className='info'>
                    <h2>MON 🤍 AMOUR</h2>
                    <p>Regístrate y obtén un 25% de descuento</p>
                    <h4>EN TU PRIMERA COMPRA</h4>
                </section>
            </section>
            <section>

            </section>
            <section className='buttonContainer'>
            <button>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Link className='btn' to="/Subscription">SUSCRIBIRSE</Link>
            </button>
            <button>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Link className='btn' to="/Colecciones">COLECCIONES</Link>
            </button>
            </section>
            
        </section>
    
  


    )
}

export default LandingPage;
