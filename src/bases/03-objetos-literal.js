const persona = {
  nombre: "Tony",
  apellido: "Valdes",
  direccion: {
    ciudad: "new York",
    zip: 3242434,
    lat: 4.34,
  },
};

const persona2 = { ...persona };
persona2.nombre = "peter";

console.table(persona);
console.log(persona);

console.table(persona2);
console.log(persona2);
