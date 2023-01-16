import { useForm } from "react-hook-form";
import '../../assets/Formulario.css';

const Formulario = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            numeroIdentificacion: '',
            nombre: '',
            apellidos: '',
            fechaNacimiento: '',
            direccion: '',
            correo: '',
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
        <section>
            <form onSubmit={handleSubmit(onSubmit)} className="row">
                <section className="grupoInput col-md-3">
                    <label>Número de identificación</label>
                    <input
                        type="text"
                        name="numeroIdentificacion"
                        placeholder=""
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
                        type="text"
                        name="fechaNacimiento"
                        id="fechaNacimiento"
                        placeholder="" {...register('fechaNacimiento', {
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
                        placeholder=""
                        {...register('direccion', {
                            required: true,
                            pattern: /^[a-zA-Z0-9_-]{4,16}$/
                        })} />
                    {errors.direccion?.type === 'required' && <p>El campo dirección es requerido</p>}
                    {errors.direccion?.type === 'pattern' && <p>El formato de dirección es invalido</p>}
                </section>
                <section className="grupoInput">
                    <label>Correo</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder=""
                        {...register('correo', {
                            required: true,
                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                        })} />
                    {errors.correo?.type === 'required' && <p>El campo número de identificación es requerido</p>}
                    {errors.correo?.type === 'pattern' && <p>El formato de correo es invalido es invalido</p>}
                </section>
                <section className="grupoButton">
                    <input type="submit" value="Suscribirse" ></input>
                </section>

            </form>
        </section>
    )
}

export default Formulario;
