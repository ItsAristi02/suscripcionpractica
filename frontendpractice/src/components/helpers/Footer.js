import '../../assets/style/footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="pie-pagina">
            <div className="grupo-1">
                <div className="box">
                    <section className='imagen'>
                        <a href="#">
                            <img src={logo}
                                alt="LogoComodin"/>
                        </a>
                    </section>
                </div>
                <div className="box">
                    <h2>NUESTRA MARCA</h2>
                    <p>Mon Amour</p>
                    <p>Sostenibilidad</p>
                    <p>Origen</p>
                </div>
                <div className="box">
                    <h2>SIGUENOS</h2>
                    <div className="red-social">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-youtube"></a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2023
                    <b>COMODIN</b>
                    - Todos los Derechos Reservados.</small>
            </div>
        </footer>
    )
}
export default Footer;
