class ContactoClase {
  nombre = '';
  apellido = '';
  email = '';
  coneccion = false;

  constructor(nombre, apellido, email, coneccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.coneccion = coneccion
  };
};

export default ContactoClase;