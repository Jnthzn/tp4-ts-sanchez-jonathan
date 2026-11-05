export {}; // Evita conflictos de ámbito global

// Demostración del Tema 2: Herramientas de ejecución
const herramienta: string = "tsx";
const modo: string = "Desarrollo rápido";

console.log(`Herramienta en uso: ${herramienta}`);
console.log(`Modo: ${modo}`);

function mostrarHerramienta(nombre: string, verificaTipos: boolean): void {
  console.log(`Comando: ${nombre} | ¿Verifica tipos?: ${verificaTipos}`);
}

mostrarHerramienta("tsc", true);
mostrarHerramienta("tsx", false);
mostrarHerramienta("node", false);
