import { useForm } from "react-hook-form";
import '../../assets/style/formulario.css';

const url = 'http://localhost:8080/cliente/';

const Formulario = () => {


    const { register, formState: { errors }, watch, handleSubmit } = useForm({
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
                            pattern: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/
                        })} />
                    {errors.fechaNacimiento?.type === 'required' && <p>El fecha de nacimiento es requerido</p>}
                    {errors.fechaNacimiento?.type === 'pattern' && <p>El formato de fecha de nacimiento es invalido</p>}
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
                    </select>
                    {errors.marcas?.type === 'required' && <p>El campo marcas es requerido</p>}
                </section>

                <section className="grupoButton">
                    <input type="submit" value="suscribirse" className="button suscribirse" ></input>
                </section>
            </form>
        </section>
    )
}

export default Formulario;
