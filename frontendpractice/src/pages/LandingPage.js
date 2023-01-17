import '../assets/style/heroSection.css';
import { Link } from "react-router-dom";


const LandingPage = () => {
    return (
        <section className="hero">
            <section className='heroText' id='filter'>
                <section className='info'>
                    <h2 >Mon 🤍 Amour</h2>
                    <p>Regístrate y obtén un 25% de descuento</p>
                    <h2>EN TU PRIMERA COMPRA</h2>
                </section>
            </section>
            <section className="btnRegresar d-flex justify-content-end"><Link className='btn' to="/Subscription">Suscribirse</Link></section>
        </section>


    )
}

export default LandingPage;