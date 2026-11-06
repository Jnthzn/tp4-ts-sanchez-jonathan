export {}; // Evita conflictos de ámbito global

// Función con tipos en parámetros y tipo de retorno explícito
function sumar(a: number, b: number): number {
  return a + b;
}

// Parámetro opcional (?)
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}

// Parámetro por defecto
function crearUsuario(nombre: string, rol: string = "USER"): void {
  console.log(`Usuario '${nombre}' creado con rol: ${rol}`);
}

// Probar las funciones
console.log(`Resultado de sumar: ${sumar(10, 15)}`);
console.log(saludar("Jonathan"));
console.log(saludar("Jonathan", "Sánchez"));
crearUsuario("Martino");
crearUsuario("Admin", "ADMINISTRADOR");
