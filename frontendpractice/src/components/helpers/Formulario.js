import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import '../../assets/style/formulario.css';


const Formulario = () => {


    
    const [tipoIdent, setTipoIdent] = useState([]);
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [direccion, setDireccion] = useState('');
    const [pais, setPais] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [marca, setMarca] = useState([]);

   

    const getTipoIdent = () => {
        axios.get('http://localhost:8080/identificacion').then(({ data }) => setTipoIdent(data))
    }

    const getMarca = () => {
        axios.get('http://localhost:8080/marca').then(({ data }) => setMarca(data))
    }

    useEffect(() => {
        getTipoIdent();
        getMarca();
    }, [])

    const postCliente = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:8080/cliente', {
           
            tipoIdentificacion: tipoIdent,
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

        setTipoIdent('');
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

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            tipoIdentifiacion: '',
            numeroIdentificacion: '',
            nombre: '',
            apellidos: '',
            fechaNacimiento: '',
            direccion: '',
            pais: '',
            departamento: '',
            ciudad: '',
            marcas: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section className="formContainer">
             <h1>Formulario de inscripción</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className="grupoInput">
                    <label>Tipo de identificación</label>
                    <select
                        name="tipoIdentificacion"
                        id="marca"
                        type="text"
                        className="formItem"
                        {...register('tipoIdentificacion', {
                            required: true,
                        })}
                    >
                        <option value="">Elige un opción...</option>
                        {tipoIdent.map((tipos) => (
                            <option key={tipos.id} value={tipos.id}>{tipos.tipoIdentificacion} </option>
                        ))}
                    </select>
                    {errors.tipoIdentificacion?.type === 'required' && <p>El campo tipo de identificación es requerido</p>}
                </section>

                <section className="grupoInput">
                    <label>Número de Identificación</label>
                    <input
                        type="text"
                        name="numeroIdentificacion"
                        className="formItem"
                        placeholder=" "
                        {...register('numeroIdentificacion', {
                            required: true,
                            maxLength: 12,
                            minLength: 5,
                            pattern: /^[0-9]+$/
                        })} />
                    {errors.numeroIdentificacion?.type === 'required' && <p>El campo número de identificación es requerido</p>}
                    {errors.numeroIdentificacion?.type === 'minLength' && <p>El campo número de identificación  debe tener menos de 12 caracteres</p>}
                    {errors.numeroIdentificacion?.type === 'maxLength' && <p>El campo número de identificación  debe tener menos de 12 caracteres</p>}
                    {errors.numeroIdentificacion?.type === 'pattern' && <p>El formato del número de identificación es invalido, solo se permiten números</p>}
                </section>

                <section className="grupoInput">
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="formItem"
                        placeholder=""
                        {...register('nombre', {
                            required: true,
                            maxLength: 30,
                            pattern: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
                        })} />
                    {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                    {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 30 caracteres</p>}
                    {errors.nombre?.type === 'pattern' && <p>El formato del nombre es invalido</p>}
                </section>

                <section className="grupoInput">
                    <label>Apellidos</label>
                    <input
                        type="text"
                        name="apellidos"
                        id="apellidos"
                        className="formItem"
                        placeholder=""
                        {...register('apellidos', {
                            required: true,
                            maxLength: 30,
                            pattern: /^[a-zA-ZÀ-ÿ\s]{1,30}$/
                        })} />
                    {errors.apellidos?.type === 'required' && <p>El campo apellidos es requerido</p>}
                    {errors.apellidos?.type === 'maxLength' && <p>El campo apellidos debe tener menos de 30 caracteres</p>}
                    {errors.apellidos?.type === 'pattern' && <p>El formato de los apellidos es invalido</p>}
                </section>

                <section className="grupoInput">
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date"
                        name="fechaNacimiento"
                        id="fechaNacimiento"
                        className="formItem"
                        placeholder=""
                        {...register('fechaNacimiento', {
                            required: true,
                        })} />
                    {errors.fechaNacimiento?.type === 'required' && <p>El fecha de nacimiento es requerido</p>}

                </section>

                <section className="grupoInput">
                    <label>Dirección</label>
                    <input
                        type="text"
                        name="direccion"
                        id="direccion"
                        className="formItem"
                        placeholder=""
                        {...register('direccion', {
                            required: true,
                            pattern: /^[a-zA-Z0-9_-]{4,16}$/
                        })} />
                    {errors.direccion?.type === 'required' && <p>El campo dirección es requerido</p>}
                    {errors.direccion?.type === 'pattern' && <p>El formato de dirección es invalido</p>}
                </section>

                <section className="grupoInput">
                    <label>País</label>
                    <select
                        name="pais"
                        id="pais"
                        className="formItem"
                        {...register('pais', {
                            required: true,
                        })}   >
                        <option value="">Elige un opción...</option>
                    </select>
                    {errors.pais?.type === 'required' && <p>El campo pais es requerido</p>}
                </section>

                <section className="grupoInput">
                    <label>Departamento</label>
                    <select
                        name="departamento"
                        id="departamento"
                        className="formItem"
                        {...register('departamento', {
                            required: true,
                        })}  >
                        <option value="">Elige un opción...</option>
                        <option value="1">1</option>
                    </select>
                    {errors.departamento?.type === 'required' && <p>El campo departamento es requerido</p>}
                </section>

                <section className="grupoInput">
                    <label>Ciudad</label>
                    <select
                        name="ciudad"
                        id="ciudad"
                        className="formItem"
                        {...register('ciudad', {
                            required: true,
                        })}  >
                        <option value="">Elige un opción...</option>
                        <option value="1">1</option>
                    </select>
                    {errors.ciudad?.type === 'required' && <p>El campo ciudad es requerido</p>}
                </section>

                <section className="grupoInput">
                    <label>Marca</label>
                    <select
                        name="marca"
                        id="marca"
                        className="formItem"
                        {...register('marcas', {
                            required: true,
                        })} >
                        <option value="">Elige un opción...</option>
                        {marca.map((marcas) => (
                            <option key={marcas.id} value={marcas.id}>{marcas.marca} </option>
                        ))}
                    </select>
                    {errors.marcas?.type === 'required' && <p>El campo marcas es requerido</p>}
                </section>
                <section className="grupoButton">
                    <input type="submit" value="SUSCRIBIRSE" className="button suscribirse" ></input>
                </section>
            </form>
        </section>
    )
}

export default Formulario;
