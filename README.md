# Trabajo Práctico Integrador: Investigación en TypeScript

## Tema 1: ¿Qué es TypeScript?

- **¿Qué es TypeScript y quién lo desarrolla?**  
  TypeScript es un superconjunto (superset) de JavaScript desarrollado por Microsoft que agrega tipado estático opcional. Todo código JavaScript válido es también TypeScript válido.

- **¿Qué diferencias tiene con JavaScript?**  
  La diferencia principal es que TypeScript agrega verificación estática de tipos en tiempo de desarrollo/compilación[cite: 6]. Además, TypeScript no se ejecuta directamente en el navegador ni en producción; debe transpilarse a JavaScript puro.

- **¿Qué ventajas ofrece?**
  - Detecta errores mientras se escribe el código, antes de ejecutarlo.
  - Mejora el autocompletado y la refactorización en el editor.
  - Hace el código más mantenible y escalable.
  - Los tipos funcionan como documentación nativa del propio código.

- **¿Cuál es su versión actual?**  
  La versión actual es TypeScript 7 (lanzada en julio de 2026).

## Tema 2: Crear y ejecutar un proyecto

- **¿Cómo se instala TypeScript en un proyecto?**  
  Se instala localmente como dependencia de desarrollo ejecutando `npm i -D typescript`[cite: 9, 10]. También se suelen incluir `@types/node` y `tsx` para desarrollo.

- **¿Para qué sirve el archivo tsconfig.json?**  
  Es el archivo de configuración del proyecto[cite: 12]. Le indica a TypeScript qué archivos forman el proyecto (`include`), qué tan estricto debe ser al verificar tipos (`strict`) y cómo generar el JavaScript (`target`, `module`, `outDir`).

- **¿Qué hace el comando tsc?**  
  Es el compilador oficial (`TypeScript Compiler`)[cite: 6]. Analiza el proyecto, verifica los tipos de todo el código y genera los archivos `.js` compilados en la carpeta de salida (por ejemplo, `dist/`).

- **¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?**
  - **`tsc`**: Verifica tipos y genera los archivos JavaScript compilados (no ejecuta directamente el código).
  - **`tsx`**: Ejecuta directamente el código `.ts` al vuelo para desarrollo rápido sin compilar ni verificar tipos.
  - **`node`**: Ejecuta el JavaScript compilado resultante (o quita las anotaciones de tipo sin verificar en versiones recientes).

## Tema 3: Tipos básicos

- **¿Qué son los tipos string, number y boolean?**  
  Son los tipos de datos primitivos en TypeScript: `string` representa texto, `number` representa valores numéricos (enteros y decimales) y `boolean` representa valores lógicos (`true` o `false`).

- **¿Cómo se declara un array con tipo?**  
  Se declara especificando el tipo de elementos seguido de corchetes, por ejemplo: `let numeros: number[] = [1, 2, 3]` o `let nombres: string[] = ["Ana", "Luis"]`.

- **¿Qué es un tipo unión?**  
  Un tipo unión permite que una variable pueda contener más de un tipo de dato, combinándolos con el operador `|` (por ejemplo: `string | number`).

- **¿Por qué se recomienda evitar any?**  
  Se recomienda evitarlo porque desactiva por completo la verificación de tipos de TypeScript. Esto permite operaciones inválidas en compilación que luego fallan al ejecutarse. En su lugar se prefiere usar `unknown`.
