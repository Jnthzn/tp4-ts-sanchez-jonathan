# Glosario de TypeScript

### 1. TypeScript

- **Definición:** Superconjunto de JavaScript desarrollado por Microsoft que añade tipado estático opcional al lenguaje.
- **Ejemplo:**

```typescript
const mensaje: string = "Hola TypeScript";
```

### 2. tsc (TypeScript Compiler)

- **Definición:** Compilador oficial de TypeScript que analiza el código, verifica los tipos de datos y genera los archivos JavaScript `.js` compilados.
- **Ejemplo:**

```bash
npx tsc
```

### 3. tsx

- **Definición:** Herramienta de desarrollo para Node.js que ejecuta directamente archivos `.ts` al vuelo quitando las anotaciones de tipos, sin necesidad de compilar previamente.
- **Ejemplo:**

```bash
npx tsx src/01-introduccion.ts
```

### 4. Tipado Estático

- **Definición:** Característica que permite declarar y verificar los tipos de datos durante el desarrollo y la compilación, antes de que el código sea ejecutado.
- **Ejemplo:**

```typescript
let edad: number = 18;
```

### 5. Tipo Unión (Union Type)

- **Definición:** Construcción de tipo que permite a una variable aceptar dos o más tipos distintos utilizando el operador `|`.
- **Ejemplo:**

```typescript
let id: string | number = 101;
```

### 6. Parámetro Opcional

- **Definición:** Parámetro de una función o propiedad de una interfaz que no es obligatorio pasar o definir, indicado con el símbolo `?`.
- **Ejemplo:**

```typescript
function saludar(nombre: string, apellido?: string): void {
  console.log(apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`);
}
```

### 7. Interface

- **Definición:** Estructura que define la forma de un objeto o contrato de datos en TypeScript, utilizada ampliamente con soporte de herencia mediante `extends`.
- **Ejemplo:**

```typescript
interface Usuario {
  id: number;
  nombre: string;
}
```

### 8. Type Alias

- **Definición:** Nombre personalizado asignado a cualquier tipo de dato, combinación de tipos primitivos, uniones o estructuras de objetos.
- **Ejemplo:**

```typescript
type ID = string | number;
```

### 9. Enum

- **Definición:** Conjunto de constantes con nombre que se transforma en un objeto real de JavaScript en el código compilado para su uso en tiempo de ejecución.
- **Ejemplo:**

```typescript
enum Rol {
  ADMIN = "ADMIN",
  USER = "USER",
}
```

### 10. Tipo Literal

- **Definición:** Tipo que limita el valor de una variable a un conjunto explícito y exacto de valores primitivos (como cadenas o números específicos).
- **Ejemplo:**

```typescript
type Moneda = "ARS" | "USD";
let miMoneda: Moneda = "ARS";
```
