import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/style/formulario.css';


const Formulario = () => {
    
    const [tipoIdentificacion, setTipoIdentificacion] = useState('');
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [direccion, setDireccion] = useState('');
    const [pais, setPais] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [marca, setMarca] = useState('');
    const navigate = useNavigate();

    const [tipos, setTipos] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [paises, setPaises] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [ciudades, setCiudades] = useState([]);


    const getTipos = () => {
        axios.get('http://localhost:8080/identificacion').then(({ data }) => setTipos(data))
    }

    const getMarcas = () => {
        axios.get('http://localhost:8080/marca').then(({ data }) => setMarcas(data))
    }


    // Llamar los paises
    useEffect(() => {
        axios.get("http://localhost:8080/paises").then((res) => setPaises(res.data));
    }, []);

    // Llamar los departamentos
    useEffect(() => {
        axios
            .get("http://localhost:8080/departamentos")
            .then((res) => setDepartamentos(res.data));
    }, []);

    // Llamar las ciudades
    useEffect(() => {
        axios
            .get("http://localhost:8080/ciudades")
            .then((res) => setCiudades(res.data));
    }, []);

    useEffect(() => {
        getTipos();
        getMarcas();
    }, [])

    const postCliente = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:8080/cliente', {

            tipoIdentificacion: tipoIdentificacion,
            numeroIdentificacion: numeroIdentificacion,
            nombre: nombre,
            apellidos: apellidos,
            fechaNacimiento: fechaNacimiento,
            direccion: direccion,
            pais: pais,
            departamento: departamento,
            ciudad: ciudad,
            marca: marca

        })
        navigate('/Informes')

        setTipoIdentificacion('');
        setNumeroIdentificacion('');
        setNombre('');
        setApellidos('');
        setFechaNacimiento('');
        setDireccion('');
        setPais('');
        setDepartamento('');
        setCiudad('');
        setMarca('');

    }


    return (
        <section className="formContainer">
            <h1>Formulario de inscripción</h1>
            <form>
                <section className="grupoInput">
                    <label>Nombre</label>
                    <input type="text" name="nombre" id="nombre" className="formItem" defaultValue={nombre} onChange={(e) => setNombre(e.target.value)}
                    />

                </section>

                <section className="grupoInput">
                    <label>Apellidos</label>
                    <input type="text" name="apellidos" id="apellidos" className="formItem" defaultValue={apellidos} onChange={(e) => setApellidos(e.target.value)}
                    />
                </section>
                <section className="grupoInput">
                    <label>Tipo de identificación</label>
                    <select name="tipoIdentificacion" id="tipoIdentificacion" className="formItem" defaultValue={tipoIdentificacion} onChange={(e) => setTipoIdentificacion(e.target.value)}
                    >
                        <option value="">Elige una opción...</option>
                        {
                            tipos.map((tipoIdent) => (
                                <option key={
                                    tipoIdent.id
                                }>
                                    {
                                        tipoIdent.tipoIdentificacion
                                    } </option>
                            ))
                        } </select>
                </section>

                <section className="grupoInput">
                    <label>Número de Identificación</label>
                    <input type="text" name="numeroIdentificacion" className="formItem" placeholder=" " defaultValue={numeroIdentificacion} onChange={(e) => setNumeroIdentificacion(e.target.value)} />
                </section>

                <section className="grupoInput">
                    <label>Fecha de nacimiento</label>
                    <input type="date" name="fechaNacimiento" id="fechaNacimiento" className="formItem" placeholder="" defaultValue={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />  </section>

                <section className="grupoInput">
                    <label>Dirección</label>
                    <input type="text" name="direccion" id="direccion" className="formItem" placeholder="" defaultValue={direccion} onChange={(e) => setDireccion(e.target.value)}
                    />
                </section>

                <section className="grupoInput">
                    <label>País</label>
                    <select
                        defaultValue={pais}
                        onChange={(e) => setPais(e.target.value)}
                        name="pais"
                        id="pais"
                        className="formItem"
                    >
                        <option value="">Elige una opción...</option>
                        {paises.map((pais) => (
                            <option key={pais.id}>
                                {pais.nombre}
                            </option>
                        ))}
                    </select>
                </section>

                <section className="grupoInput">
                    <label>Departamento</label>
                    <select name="departamento" id="departamento" className="formItem" defaultValue={departamento} onChange={(e) => setDepartamento(e.target.value)}
                    >
                        <option value="">Elige una opción...</option>
                        {
                            departamentos.map((departamento) => (
                                <option key={departamento.id}>
                                {departamento.nombre } </option>
                            ))
                        } </select>
                </section>

                <section className="grupoInput">
                    <label>Ciudad</label>
                    <select name="ciudad" id="ciudad" className="formItem" defaultValue={ciudad} onChange={(e) => setCiudad(e.target.value)}
                    >
                        <option value="">Elige una opción...</option>
                        {
                            ciudades.map((ciudad) => (
                                <option key={ciudad.id}>
                                    {ciudad.nombre} </option>
                            ))
                        } </select>
                </section>

                <section className="grupoInput">
                    <label>Marca</label>
                    <select name="marca" id="marca" className="formItem" defaultValue={marca} onChange={(e) => setMarca(e.target.value)}
                    >
                        <option value="">Elige un opción...</option>
                        {
                            marcas.map((marca) => (
                                <option key={
                                    marca.id
                                }>
                                    {
                                        marca.marca
                                    } </option>
                            ))
                        } </select>
                </section>
                <section className="grupoButton">
                    <input type="submit" value="SUSCRIBIRSE" className="button suscribirse" onClick={postCliente}></input>
                </section>
            </form>

        </section>
    )

}

export default Formulario;
