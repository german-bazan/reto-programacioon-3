import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import ContactoClase from '../../models/contacto.clase';

const FormularioContacto = ({agregar, length}) => {

  const nombreRef = useRef('');
  const apellidoRef = useRef('');
  const emailRef = useRef('');

  function agregarContacto(e){
    e.preventDefault();
    const nuevoContacto = new ContactoClase(
      nombreRef.current.value,
      apellidoRef.current.value,
      emailRef.current.value,
      false
    );
    agregar(nuevoContacto);
  }

  return (
    <form onSubmit={agregarContacto} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input ref={nombreRef} id='inputNombre' type='text'  required autoFocus placeholder='Nombre'/>
        <input ref={apellidoRef} id='inputApellido' type='text'  required placeholder='Apellido'/>
        <input ref={emailRef} id='inputEmail' type='email' required placeholder='Email'/>
        <button type='submit' className='btn btn-success btn-lg ms-2'>
          {length > 0 ? 'Agregar nuevo contacto' : 'Crea tu primer contacto'}
        </button>
      </div>
    </form>
  );
}

FormularioContacto.protoTypes = {
  agregar: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default FormularioContacto;