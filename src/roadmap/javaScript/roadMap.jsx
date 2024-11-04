import { DivArticle, DivTopicos } from "../../componentes/contenedores/contenedores"
import { Portada } from "../../componentes/portada/portada"


export function RoadMap() {
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Road map Js"} text={"Por Steve 04/11/2024"} />

            <DivArticle>
                <DivTopicos>
                    <h1>Objetos</h1>

                    <h2>Dinamismo</h2>

                    <p>
                        Propiedades y métodos dinámicos: Añadir, modificar o eliminar propiedades y métodos de un objeto en tiempo de ejecución.
                        Acceso a propiedades: Notación de punto vs. notación de corchetes.
                        Enumeración de propiedades: Cómo recorrer propiedades de un objeto (`for...in`, `Object.keys`, `Object.values`, `Object.entries`).
                        Mutabilidad: Cómo los objetos pueden cambiar a lo largo del tiempo y cómo funciona el paso por referencia.
                    </p>

                    <h2>Factory Functions</h2>

                    <p>
                        Funciones de fábrica: Crear funciones que devuelvan objetos para reutilizar la lógica de creación.
                        Ventajas: Mejor organización y encapsulamiento en comparación con el uso directo de objetos literales.
                        Ejemplos: Crear objetos con propiedades y métodos compartidos, sin el uso de`new`.
                    </p>

                    <h2>Constructor Functions</h2>

                    <p>
                        Funciones constructoras: Uso de funciones con `new` para crear instancias de objetos.
                        Convenciones: Nombrado con mayúscula inicial(`PascalCase`) y uso de `this` para propiedades.
                        Prototipos: Introducción a cómo las constructor functions pueden utilizar prototipos para métodos compartidos.
                    </p>

                    <h2>Atajos Constructores</h2>

                    <p>
                        Clases(ES6) **: La sintaxis de `class` y cómo es un atajo para crear funciones constructoras.
                        Métodos estáticos y de instancia **: Cómo definir métodos que no necesitan una instancia y cómo se relacionan con la clase.
                        Herencia **: Conceptos básicos de herencia utilizando`extends`.
                    </p>

                    <h1>Funciones</h1>

                    <h2>Function</h2>

                    <p>
                        Declaración y expresión de funciones **: Diferencias entre `function` y funciones de tipo`function expression`.
                        Funciones anónimas y nombradas **: Cuándo usar cada tipo y las ventajas de cada una.
                        Arrow functions **: Cómo y cuándo usar `=>` para simplificar la sintaxis.
                        Contexto`this` **: Cómo cambia el contexto de `this` en funciones regulares vs.funciones flecha.
                    </p>

                    <h2>Valor y referencia</h2>

                    <p>
                        Paso por valor **: Cómo los tipos primitivos(números, cadenas) se pasan por valor.
                        Paso por referencia **: Cómo los objetos, arrays y funciones se pasan por referencia, lo que afecta la mutabilidad.
                        Inmutabilidad **: Técnicas para hacer que los datos sean inmutables, como el uso de`Object.freeze()`.
                    </p>

                    <h2>Listar propiedades</h2>

                    <p>
                        `Object.keys` **: Devuelve las claves de un objeto en un array.
                        `Object.values` **: Devuelve los valores de un objeto en un array.
                        `Object.entries` **: Devuelve un array de pares `[clave, valor]` para cada propiedad.
                        Enumeración vs.Propiedades propias **: Uso de `hasOwnProperty` y técnicas para evitar propiedades de prototipos.
                    </p>

                    <h2>Clonando objetos</h2>

                    <p>
                        Shallow Copy vs.Deep Copy **: Diferencias entre copia superficial(usando`Object.assign`) y profunda(con bibliotecas o JSON).
                        Métodos de clonación **: `Object.assign()`, desestructuración, `JSON.parse(JSON.stringify())`, y bibliotecas externas.
                        Copias inmutables **: Técnicas para crear copias de objetos para prevenir modificaciones accidentales.
                    </p>

                    <h2>Privado vs.Público</h2>

                    <p>
                        Privacidad en objetos **: Uso de closures y símbolos para simular miembros privados.
                        Accesibilidad **: Definición de propiedades públicas vs.privadas en objetos y clases.
                        Módulos y encapsulación **: Uso de módulos para limitar el alcance de propiedades y métodos.
                    </p>

                    <h1>Funciones</h1>

                    <h2>Declaración VS Expresión</h2>

                    <p>
                        Declaración de funciones **: `function myFunction() {... }`, en qué casos se recomienda su uso.
                        Expresión de funciones **: `const myFunction = function () {... }`, ventajas y diferencias respecto a la declaración.
                        Diferencias clave **: `Hoisting`, asignación de funciones como valores y el concepto de funciones anónimas.
                    </p>

                    <h2> let, var, const, function</h2>

                    <p>
                        `var` **: Declaración de variables antes de ES6, ámbito global o de función, problemas de`hoisting`.
                        `let` **: Introducción en ES6, ámbito de bloque, diferencia con`var`.
                        `const` **: Variables constantes, reglas de asignación y ámbito de bloque.
                        `function` **: Uso de funciones declaradas, diferencias de alcance y `hoisting` con `let` y`const`.
                    </p>

                    <h2>Alcance(Scope)</h2>

                    <p>
                        Ámbito global y local **: Cómo y cuándo se pueden acceder las variables en distintos contextos.
                        Ámbito de bloque **: Uso de `let` y `const` dentro de bloques(como`if` y`for`).
                        Ámbito de función **: Cómo las funciones crean su propio contexto de alcance.
                        Closures **: Concepto de closures y cómo el alcance de las variables afecta la ejecución.
                    </p>

                    <h2>Arguments</h2>

                    <p>
                        Objeto`arguments` **: Cómo acceder a todos los argumentos pasados a una función, especialmente en funciones que no especifican parámetros explícitos.
                        Limitaciones de `arguments` en arrow functions **: Explicación de por qué `arguments` no funciona en arrow functions.
                        Uso de`arguments.length` **: Determinar la cantidad de argumentos en una función, especialmente cuando se usan parámetros variables.
                    </p>

                    <h2>Fat Arrow Function( => )</h2>

                    <p>
                        Sintaxis básica **: Introducción a la sintaxis de las arrow functions.
                        Ventajas **: Simplificación del código, especialmente en funciones cortas y de una línea.
                        Limitaciones **: Ausencia del objeto `arguments` y del propio`this`.
                        Ámbito léxico de`this` **: Cómo las arrow functions no tienen su propio`this`, lo que evita problemas de alcance.
                    </p>

                    <h2>Rest</h2>

                    <p>
                        Sintaxis de Rest(`...args`) **: Recolección de argumentos restantes en una función.
                        Uso en funciones **: Cómo manejar múltiples argumentos de entrada de manera flexible.
                        Distinción con`arguments` **: Diferencias entre `...args` y`arguments`, especialmente en arrow functions.
                    </p>

                    <h2>Parámetros predeterminados</h2>

                    <p>
                        Parámetros con valores por defecto **: Establecer valores predeterminados para parámetros en funciones.
                        Orden de los parámetros **: Colocar los parámetros predeterminados al final para evitar conflictos.
                        Uso de expresiones **: Asignar un valor predeterminado basado en el valor de otros parámetros.
                    </p>

                    <h2>Param Destructuring</h2>

                    <p>
                        Destructuración de parámetros **: Extraer propiedades directamente de objetos pasados como argumentos.
                        Parámetros con valores predeterminados **: Destructuración combinada con valores predeterminados.
                        Aplicación en funciones **: Cómo simplificar la obtención de propiedades de objetos y arrays dentro de funciones.
                    </p>

                    <h2>Getters y Setters</h2>

                    <p>
                        Definición de getters y setters **: Creación de funciones `get` y `set` dentro de objetos y clases.
                        Uso en encapsulación de datos **: Control de acceso a propiedades privadas o internas.
                        Ventajas **: Permitir lógica adicional al acceder o modificar una propiedad, y validar datos de entrada.
                    </p>

                    <h2>Try y Catch</h2>

                    <p>
                        Bloque`try...catch` **: Manejo de excepciones en JavaScript, estructura básica.
                        `try...catch...finally` **: Uso de `finally` para ejecutar código independientemente de los errores.
                        Propagación de errores **: Cómo los errores se "propagan" y pueden capturarse en niveles superiores.
                        Manejo de errores en funciones asincrónicas **: Introducción a `async / await ` y cómo usar `try...catch` con promesas.
                    </p>
                    
                </DivTopicos>
            </DivArticle>
        </>
    )
}

/*
 
estos temas si deberian ir en el curso de js mas basico
 
### Math
    - ** Métodos básicos **: `Math.round`, `Math.ceil`, `Math.floor`, `Math.abs`.
- ** Funciones avanzadas **: `Math.random`, `Math.pow`, `Math.sqrt`, `Math.max`, `Math.min`.
- ** Redondeo **: Diferencias entre redondeo estándar y truncado.
- ** Generación de números aleatorios **: Cómo generar números en rangos específicos.
 
---
 
### Date
    - ** Crear fechas **: Uso de`new Date()`, pasando argumentos específicos.
- ** Métodos para obtener y modificar **: `getFullYear`, `getMonth`, `getDate`, `setFullYear`, etc.
- ** Formateo de fechas **: Técnicas para convertir fechas en cadenas con formatos específicos.
- ** Operaciones de fecha **: Restar, sumar y comparar fechas, uso de `Date.now()` para obtener marcas de tiempo.
 
---
 
### Strings
#### Caracteres de escape
    - ** Uso de caracteres de escape **: Cómo insertar comillas, saltos de línea(`\n`), tabulaciones(`\t`) y otros caracteres especiales.
- ** Secuencias de escape comunes **: `\'`, `\"`, `\\`, `\u`(para Unicode).
 
#### Template Strings
    - ** Introducción a las plantillas de cadenas **: Uso de las comillas invertidas(\`\`) para incluir expresiones dinámicas.
- **Interpolación**: Uso de `${ expresión }` para incrustar valores dentro de cadenas.
- **Multilínea**: Crear cadenas de varias líneas sin caracteres de escape.
- **Expresiones complejas en plantillas**: Incluir llamadas a funciones, operaciones matemáticas y lógica simple.
*/



---

### `this`
    - ** Definición básica **: Explicación de `this` como referencia al contexto de ejecución actual.
- ** `this` en objetos y funciones **: Cómo cambia `this` en distintos contextos(en métodos, en funciones, y en el ámbito global).
- ** Problemas comunes **: Ejemplos donde `this` no es lo que se espera(como en funciones internas).

---

### Contexto de`this`
    - ** Ámbito de `this` en funciones **: Cómo el contexto de `this` varía en funciones regulares, métodos y arrow functions.
- ** Uso en clases y objetos **: `this` en métodos de clase y en constructores.
- ** Ámbito léxico en arrow functions **: Cómo el `this` en una arrow function hereda el contexto del `this` exterior.

---

### Cambiando el contexto
    - ** Métodos`call`, `apply`, y`bind` **:
  - ** `call` **: Cambiar el contexto de `this` pasando los argumentos uno a uno.
  - ** `apply` **: Cambiar el contexto de `this` pasando los argumentos como array.
  - ** `bind` **: Crear una nueva función con un contexto de `this` fijado.
- ** Usos comunes **: Ejemplos prácticos de cuándo y por qué cambiar el contexto(eventos en navegadores, herencia, etc.).
- ** Arrow functions vs.funciones normales **: Diferencias en el uso y cómo afecta el contexto de`this`.

---


¡Claro! Aquí tienes un desglose detallado de cada tema relacionado con el uso de prototipos y los principios de la programación orientada a objetos(POO) en JavaScript.Este esquema debería ayudarte a organizar el contenido que necesitas estudiar.

---

### Prototipos

#### 4 Principios de la POO
    - ** Encapsulación **: Agrupación de datos y métodos en una estructura(como un objeto o clase) y control de su acceso.
- ** Abstracción **: Ocultación de detalles internos complejos, proporcionando una interfaz simplificada.
- ** Herencia **: Creación de nuevas estructuras(clases u objetos) que adquieren propiedades de otras.
- ** Polimorfismo **: Capacidad de los objetos para compartir la misma interfaz y responder de manera específica según su tipo.

#### Herencia
    - ** Concepto de herencia en JavaScript **: Entender cómo un objeto puede "heredar" propiedades y métodos de otro objeto o clase.
- ** Uso de`Object.create()` **: Crear objetos heredando prototipos específicos.
- ** Clases en ES6 **: Cómo las clases en JavaScript implementan herencia de forma más sencilla que los prototipos.

#### Prototipos
    - ** Sistema de prototipos en JavaScript **: Entender que cada objeto tiene una referencia interna(`[[Prototype]]`) a otro objeto.
- ** Objeto`prototype` **: Cómo funciona y se usa el `prototype` en funciones constructoras para definir métodos y propiedades compartidas.
- ** Prototypal Chain **: Cadena de prototipos que permite a los objetos buscar propiedades y métodos en su prototipo si no están definidos localmente.

#### Prototipos VS Instancias
    - ** Diferencia entre prototipos e instancias **: Qué se comparte entre instancias(métodos del prototipo) y qué es exclusivo de cada instancia(propiedades propias).
- ** Métodos compartidos **: Ventajas de definir métodos en el prototipo en lugar de dentro de cada instancia.
- ** Instancias **: Cómo crear instancias que contienen sus propias propiedades, pero comparten métodos con otros objetos de la misma clase / prototipo.

---

### Iterando Propiedades
    - ** Métodos de iteración de propiedades **: `for...in`, `Object.keys()`, `Object.values()`, y`Object.entries()`.
- ** Propiedades enumerables **: Qué significa que una propiedad sea enumerable y cómo afecta la iteración.
- ** Distinguir propiedades propias y heredadas **: Uso de `hasOwnProperty()` para identificar las propiedades definidas en el propio objeto versus las del prototipo.

---

### Extendiendo Prototipos
    - ** Extensión de prototipos **: Agregar nuevos métodos y propiedades al `prototype` de una función constructora.
- ** Extender tipos nativos **: Riesgos y ventajas de modificar los prototipos de tipos nativos como `Array` o`String`.
- ** Compatibilidad y conflictos **: Consideraciones al extender prototipos, especialmente en librerías compartidas.

---

### Implementando Herencia
    - ** Herencia prototipal **: Usar prototipos para crear una relación entre objetos que permita la herencia de métodos y propiedades.
- ** Clases en ES6 **: Uso de `extends` y `super` en ES6 para implementar herencia de manera más legible y estructurada.
- ** Prototipos heredados **: Cómo funcionan los prototipos en la herencia para compartir métodos entre subclases y superclases.

---

### Constructor Padre
    - ** Uso del constructor padre **: Llamada al constructor del objeto o clase padre desde la subclase usando`super`.
- ** Configuración de propiedades heredadas **: Cómo inicializar las propiedades del constructor padre en una subclase.
- ** Superclase y subclase **: Definir y diferenciar entre una clase base(padre) y una clase derivada(hija).

---

### Method Override
    - ** Sobrescribir métodos **: Cómo una subclase puede redefinir los métodos heredados de una superclase.
- ** Uso de`super.methodName()` **: Llamada al método de la superclase desde la subclase para extender la funcionalidad.
- ** Buenas prácticas **: Casos donde es recomendable sobrescribir métodos y cómo hacerlo de manera efectiva.

---

### Polimorfismo
    - ** Polimorfismo en JavaScript **: Capacidad de múltiples clases de compartir la misma interfaz(métodos) con implementaciones específicas.
- ** Uso de polimorfismo en herencia **: Crear métodos comunes con comportamientos específicos en clases derivadas.
- ** Ventajas de polimorfismo **: Ejemplos prácticos de cómo el polimorfismo facilita la expansión y mantenimiento del código.

---

### Composición VS Herencia
    - ** Concepto de composición **: Creación de objetos complejos a partir de componentes más simples en lugar de usar herencia.
- ** Diferencias entre composición y herencia **: Ventajas de cada enfoque y casos de uso recomendados.
- ** Patrones de composición **: Ejemplos como el patrón "Módulo" o la técnica "Mixin" para combinar funcionalidades.

---

### Mixins
    - ** Concepto de Mixins **: Definición de objetos o funciones que contienen métodos y propiedades para combinar en otros objetos.
- ** Implementación de Mixins **: Uso de funciones o `Object.assign()` para mezclar métodos en un objeto o clase.
- ** Ventajas y casos de uso **: Flexibilidad al agregar comportamientos sin herencia, permitiendo una "herencia múltiple" en JavaScript.

---

    Este desglose abarca los puntos esenciales de cada tema sobre prototipos y POO en JavaScript, permitiéndote entender cómo funcionan y cuándo usarlos de forma efectiva.Si necesitas profundizar en alguna sección, estaré encantado de ayudarte.