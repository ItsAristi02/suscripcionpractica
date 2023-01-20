import americanEagle from '../../../src/assets/images/americaneagle.png';
import americanino from '../../../src/assets/images/americanino.png';
import rifle from '../../../src/assets/images/rifle.png';
import nafnaf from '../../../src/assets/images/nafnaf.png';
import esprit from '../../../src/assets/images/esprit.png';
import chevignon from '../../../src/assets/images/chevignon.png';
import star from '../../../src/assets/images/gStart.png';
import '../../assets/style/marcas.css';

const Marcas = () => {
    return (
        <section className='iconMarcas'>
            <section className='marcasContainer'>
                <a href="https://www.ae.com.co/"><img src={americanEagle}
                        width={'140px'}/></a>
                <a href="https://www.americanino.com/"><img src={americanino}
                        width={'140px'}/></a>
                <a href="https://www.esprit.com.co/"><img src={esprit}
                        width={'140px'}/></a>
                <a href="https://www.g-star.com/es_es"><img src={star}
                        width={'140px'}/></a>
                <a href="https://www.nafnaf.com.co/"><img src={nafnaf}
                        width={'140px'}/></a>
                <a href="https://www.rifle.com.co/"><img src={rifle}
                        width={'140px'}/></a>
                <a href="https://www.chevignon.com.co/"><img src={chevignon}
                        width={'140px'}/></a>
            </section>
        </section>
    )
}

export default Marcas;
