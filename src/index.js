//destructuracion

const persona = {
  nombre: "tony",
  edad: 45,
  clave: "admin123",
};

const { nombre } = persona;
const { edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ({ nombre, edad, rango = "capitan" }) => {
  console.log(nombre, edad, rango);
};

retornaPersona(persona);
