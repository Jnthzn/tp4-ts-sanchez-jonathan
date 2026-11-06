export {}; // Evita conflictos de ámbito global entre archivos

// Tipos primitivos
const usuario: string = "Jonathan";
const edad: number = 18;
const activo: boolean = true;

// Array con tipo
const notas: number[] = [8, 9, 10];

// Tipo Unión
let id: string | number = "USER-101";
id = 202; // Válido por el tipo unión

// Demostración de unknown vs any
let dato: unknown = "Texto en unknown";
if (typeof dato === "string") {
  console.log(`Dato verificado: ${dato.toUpperCase()}`); // Verificación estricta previa
}

console.log(`Usuario: ${usuario} (${edad} años) | Activo: ${activo}`);
console.log(`Notas: ${notas.join(", ")}`);
console.log(`ID actual: ${id}`);
