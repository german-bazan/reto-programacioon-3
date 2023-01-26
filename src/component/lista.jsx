import React, { useState, useEffect } from 'react';
import ContactoClase from '../models/contacto.clase';
import ContactoComponent from './contacto';
import FormularioContacto from '../component/forms/formulario.contacto';
import '../estilos/estilos.css';

const ListaDeContactos = () => {

  const contactoPorDefecto = new ContactoClase('Germán', 'Bazán', 'germanalebazan@gmail.com', true);

  // Estado del componente
  const [contactos, setContactos] = useState([contactoPorDefecto]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified');
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log('TaskList component is going to unmount...')
    }
  }, [contactos])


  function contactoConectado(contacto){
    console.log('Contacto Conectado', contacto);
    const index = contactos.indexOf(contacto);
    const contactoTemporal = [...contactos];
    contactoTemporal[index].coneccion = !contactoTemporal[index].coneccion;
    setContactos(contactoTemporal);
  }

  function eliminarContacto(contacto){
    console.log('Eliminando Contacto', contacto);
    const index = contactos.indexOf(contacto);
    const contactoTemporal = [...contactos];
    contactoTemporal.splice(index,1);
    setContactos(contactoTemporal);
  }

  function agregarContacto(contacto){
    console.log('Contacto Agregado', contacto);
    const contactoTemporal = [...contactos];
    contactoTemporal.push(contacto);
    setContactos(contactoTemporal);
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Apellido</th>
            <th scope='col'>Email</th>
            <th scope='col'>Coneccion</th>
          </tr>
        </thead>
        <tbody>
          { contactos.map((contacto, index) => {
            return (
                <ContactoComponent 
                  key={index} 
                  contacto={contacto}
                  coneccion={contactoConectado}
                  eliminar = {eliminarContacto}
                  >
                </ContactoComponent>
              )
            }
          )}
        </tbody>
      </table>
    )
  }

  let tasksTable;

  if(contactos.length > 0){
    tasksTable = <Table></Table>
  }else{
    tasksTable = (
      <div>
        <h3> There are no tasks to show</h3>
        <h4>Please, create one</h4>
      </div>
    )
  }

  const loadingStyle = {
    color: 'grey',
    fontSize: '30px',
    fontWeight: 'bold'
  }

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          {/* Card Header (title) */}
          <div className='card-header p-3'>
            <h5>
              Your Tasks:
            </h5>
          </div>
          {/* Card Body (content) */}
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
            {/* TODO: Add Loading Spinner */}
            {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : tasksTable}
          </div>
        </div>
      </div>
      <FormularioContacto agregar={agregarContacto} length={contactos.length}></FormularioContacto>
    </div>
  );
};


export default ListaDeContactos;