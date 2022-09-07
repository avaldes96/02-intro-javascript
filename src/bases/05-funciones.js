// funciones en JS
const saludar = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => `Hola, ${nombre}`;

const saludar3 = () => "hola mundo";

console.log(saludar("Adriana"));
console.log(saludar2("Raciel"));
console.log(saludar("Adrian"));

const getUser = () => ({
  uid: "Abc123",
  Username: "abdf12",
});

console.log(getUser);

const getUsuarioActivo = (nombre) => ({
  uid: "Abc456",
  Username: "abdf567",
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
