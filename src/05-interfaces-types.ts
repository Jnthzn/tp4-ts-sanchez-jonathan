export {};

// Definición de Interface con propiedad opcional y herencia
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad?: number; // Propiedad opcional
}

interface Empleado extends Usuario {
  puesto: string;
}

// Definición de Types para uniones y alias
type Rol = "ADMIN" | "USER" | "GUEST";
type ID = string | number;

// Ejemplos de uso
const empleado1: Empleado = {
  id: 1,
  nombre: "Jonathan",
  email: "jonathan@example.com",
  puesto: "Desarrollador",
};

const rolUsuario: Rol = "ADMIN";
const idUsuario: ID = "EMP-500";

console.log(`Empleado: ${empleado1.nombre} - Puesto: ${empleado1.puesto}`);
console.log(`Edad opcional: ${empleado1.edad ?? "No especificada"}`);
console.log(`Rol de acceso: ${rolUsuario} | ID de registro: ${idUsuario}`);
