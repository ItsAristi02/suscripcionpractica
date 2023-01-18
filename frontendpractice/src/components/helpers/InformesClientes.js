import '../../assets/style/formulario.css';
import {useState} from 'react';

const InformesClientes = () =>{

    const [clientes, setClientes] = useState([]);

    function getClientes() {

        fetch('http://localhost:8080/cliente')
            .then(res => res.json())
            .then(res => setClientes(res))
    }
    getClientes()

    return(
        <section class="bd-example">
            <h1>Información de clientes</h1>
                <table class="table table-dark table-borderless">
                    <thead>
                        <tr className="">
                            <th scope="col">Tipo de documento</th>
                            <th scope="col">Número de documento</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Fecha de Nacimiento</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">País</th>
                            <th scope="col">Departamento</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Marca</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(cliente => (
                            <tr key={cliente.id}>
                                <th>{cliente.tipoIdentifiacion}</th>
                                <th>{cliente.numeroIdentificacion}</th>
                                <th>{cliente.nombre}</th>
                                <th>{cliente.apellidos}</th>
                                <th>{cliente.fechaNacimiento}</th>
                                <th>{cliente.direccion}</th>
                                <th>{cliente.pais}</th>
                                <th>{cliente.departamento}</th>
                                <th>{cliente.ciudad}</th>
                                <th>{cliente.marca}</th>
                                <th></th>
                                <th></th>

                            </tr>

                        ))}

                    </tbody>

                </table>
            </section>
    )

}

export default InformesClientes;