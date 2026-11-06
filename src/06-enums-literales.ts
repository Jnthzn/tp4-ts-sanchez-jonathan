export {};

// Ejemplo de Enum
enum EstadoPedido {
  PENDIENTE = "PENDIENTE",
  ENVIADO = "ENVIADO",
  ENTREGADO = "ENTREGADO",
}

let estadoActual: EstadoPedido = EstadoPedido.PENDIENTE;

// Ejemplo de Tipos Literales
type NivelAcceso = "ADMIN" | "USER" | "GUEST";
type CodigoRespuesta = 200 | 404 | 500;

let usuarioRol: NivelAcceso = "ADMIN";
let statusHttp: CodigoRespuesta = 200;

console.log(`Estado del pedido (Enum): ${estadoActual}`);
console.log(`Rol de usuario (Literal): ${usuarioRol}`);
console.log(`Código HTTP (Literal): ${statusHttp}`);
