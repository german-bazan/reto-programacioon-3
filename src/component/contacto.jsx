import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ContactoClase from '../models/contacto.clase';
import '../estilos/estilos.css';

const ContactoComponent = ({ contacto, coneccion, eliminar }) => {

  useEffect(() => {
    console.log('Created Task')
    return () => {
      console.log(`Contacto: ${ContactoClase.nombre}`);
    }
  }, [contacto]);

  /**
   * Function that returns icon depending on completion of the task
   */
  function contactoConeccionIcono(){
    if(contacto.coneccion){
      return (<i onClick={() => coneccion(contacto)} className='bi-toggle-off task-action' style={{color: 'green'}}></i>)
    }else{
      return (<i onClick={() => coneccion(contacto)} className='bi-toggle-on task-action' style={{color: 'grey'}}></i>)
    }
  }

  const contactoConectado = {
    color: 'gray',
    fontWeight: 'bold',
    textDecoration: 'line-through'
  }

  const contactoDesonectado = {
    fontWeight: 'bold',
    color: 'tomato'
  }

  return (
    <tr className='fw-normal' style={contacto.coneccion ? contactoConectado : contactoDesonectado}>
      <th >
        <span className='ms-2'>{contacto.nombre}</span>
      </th>
      <td className='align-middle'>
        <span>{contacto.apellido}</span>
      </td>
      <td className='align-middle'>
        <span>{contacto.email}</span>
      </td>
      <td className='align-middle'>
        {contactoConeccionIcono()}
      </td>
      <td>
      <i className='bi-trash coneccion' style={{color: 'tomato'}} onClick={() => eliminar(contacto)}></i>
      </td>
    </tr>
  );
};


ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(ContactoClase).isRequired,
  coneccion: PropTypes.func.isRequired,
  eliminar: PropTypes.func.isRequired
};


export default ContactoComponent;