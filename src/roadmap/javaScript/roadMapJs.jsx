import { DivArticle, DivTopicos } from "../../componentes/contenedores/contenedores"
import { ExtendPanel } from "../../componentes/extendpanel/ExtendPanel"
import { Portada } from "../../componentes/portada/portada"


export function RoadMapJs() {
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Road map Js"} text={"Por Steve 04/11/2024"} />

            <DivArticle>

                <DivTopicos>

                    <h1>Objetos</h1>

                    <ExtendPanel title='Dinamismo'>
                        <p>
                            Propiedades y métodos dinámicos: Añadir, modificar
                            o eliminar propiedades y métodos de un objeto en tiempo de ejecución.
                        </p>

                        <p>
                            Acceso a propiedades: Notación de punto vs. notación de corchetes.
                        </p>

                        <p>
                            Enumeración de propiedades: Cómo recorrer propiedades de un objeto
                            (for...in, Object.keys, Object.values, Object.entries).
                        </p>

                        <p>
                            Mutabilidad: Cómo los objetos pueden cambiar a lo largo del tiempo y
                            cómo funciona el paso por referencia.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Factory Functions'>
                        <p>
                            Funciones de fábrica: Crear funciones que devuelvan objetos para
                            reutilizar la lógica de creación.
                        </p>
                        <p>
                            Ventajas: Mejor organización y encapsulamiento en comparación con
                            el uso directo de objetos literales.
                        </p>
                        <p>
                            Ejemplos: Crear objetos con propiedades y métodos compartidos, sin
                            el uso de new.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Constructor Functions'>
                        <p>
                            Funciones constructoras: Uso de funciones con new
                            para crear instancias de objetos.
                        </p>
                        <p>
                            Convenciones: Nombrado con mayúscula inicial(PascalCase) y uso de this
                            para propiedades.
                        </p>
                        <p>
                            Prototipos: Introducción a cómo las constructor functions pueden utilizar
                            prototipos para métodos compartidos.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Atajos Constructores'>
                        <p>
                            Clases(ES6): La sintaxis de class y cómo es un atajo para crear funciones
                            constructoras.
                        </p>
                        <p>
                            Métodos estáticos y de instancia: Cómo definir métodos que no necesitan una
                            instancia y cómo se relacionan con la clase.
                        </p>
                        <p>
                            Herencia: Conceptos básicos de herencia utilizando extends.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Function'>
                        <p>
                            Declaración y expresión de funciones: Diferencias entre function y funciones de
                            tipo function expression.
                        </p>
                        <p>
                            Funciones anónimas y nombradas: Cuándo usar cada tipo y las ventajas de cada una.
                        </p>
                        <p>
                            Arrow functions: Cómo y cuándo usar =&gt; para simplificar la sintaxis.
                        </p>
                        <p>
                            Contexto this: Cómo cambia el contexto de this en funciones regulares vs.funciones flecha.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Valor y referencia'>
                        <p>
                            Paso por valor: Cómo los tipos primitivos(números, cadenas) se pasan por valor.
                        </p>
                        <p>
                            Paso por referencia: Cómo los objetos, arrays y funciones se pasan por referencia, lo que afecta
                            la mutabilidad.
                        </p>
                        <p>
                            Inmutabilidad: Técnicas para hacer que los datos sean inmutables, como el uso de Object.freeze().
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Listar propiedades'>
                        <p>
                            Object.keys: Devuelve las claves de un objeto en un array.
                        </p>
                        <p>
                            Object.values: Devuelve los valores de un objeto en un array.
                        </p>
                        <p>
                            Object.entries: Devuelve un array de pares [clave, valor] para cada propiedad.
                        </p>
                        <p>
                            Enumeración vs.Propiedades propias: Uso de hasOwnProperty y técnicas para evitar propiedades de
                            prototipos.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Clonando objetos'>
                        <p>
                            Shallow Copy vs.Deep Copy: Diferencias entre copia superficial(usando Object.assign)
                            y profunda(con bibliotecas o JSON).
                        </p>
                        <p>
                            Métodos de clonación: Object.assign(), desestructuración, JSON.parse(JSON.stringify()),
                            y bibliotecas externas.
                        </p>
                        <p>
                            Copias inmutables: Técnicas para crear copias de objetos para prevenir modificaciones accidentales.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Privado vs.Público'>
                        <p>
                            Privacidad en objetos: Uso de closures y símbolos para simular miembros privados.
                        </p>
                        <p>
                            Accesibilidad: Definición de propiedades públicas vs.privadas en objetos y clases.
                        </p>
                        <p>
                            Módulos y encapsulación: Uso de módulos para limitar el alcance de propiedades y métodos.
                        </p>
                    </ExtendPanel>

                    <h1>Funciones</h1>

                    <ExtendPanel title='Declaración VS Expresión'>
                        <p>
                            Declaración de funciones: function myFunction() &#123;... &#125;, en qué casos se
                            recomienda su uso.
                        </p>

                        <p>
                            Expresión de funciones: const myFunction = function () &#123;... &#125;, ventajas y diferencias respecto a la declaración.
                        </p>

                        <p>
                            Diferencias clave: Hoisting, asignación de funciones como valores y el concepto de funciones anónimas.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='let, var, const, function'>
                        <p>
                            var: Declaración de variables antes de ES6, ámbito global o de función, problemas de`hoisting`.
                        </p>
                        <p>
                            let: Introducción en ES6, ámbito de bloque, diferencia con var.
                        </p>
                        <p>
                            const: Variables constantes, reglas de asignación y ámbito de bloque.
                        </p>
                        <p>
                            function: Uso de funciones declaradas, diferencias de alcance y hoisting con let y const.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Alcance(Scope)'>
                        <p>
                            Ámbito global y local: Cómo y cuándo se pueden acceder las variables en distintos contextos.
                        </p>
                        <p>
                            Ámbito de bloque: Uso de let y const dentro de bloques(como if y for).
                        </p>
                        <p>
                            Ámbito de función: Cómo las funciones crean su propio contexto de alcance.
                        </p>
                        <p>
                            Closures: Concepto de closures y cómo el alcance de las variables afecta la ejecución.
                        </p>
                    </ExtendPanel>

                    <h2>Arguments</h2>

                    <p>
                        Objeto arguments: Cómo acceder a todos los argumentos pasados a una función, especialmente en funciones que no especifican parámetros explícitos.
                        Limitaciones de arguments en arrow functions: Explicación de por qué `arguments` no funciona en arrow functions.
                        Uso de arguments.length: Determinar la cantidad de argumentos en una función, especialmente cuando se usan parámetros variables.
                    </p>

                    <h2>Fat Arrow Function( => )</h2>

                    <p>
                        Sintaxis básica: Introducción a la sintaxis de las arrow functions.
                        Ventajas: Simplificación del código, especialmente en funciones cortas y de una línea.
                        Limitaciones: Ausencia del objeto `arguments` y del propio`this`.
                        Ámbito léxico de`this` Cómo las arrow functions no tienen su propio`this`, lo que evita problemas de alcance.
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

                    <h2>`this`</h2>

                    <p>
                        Definición básica **: Explicación de `this` como referencia al contexto de ejecución actual.
                        `this` en objetos y funciones **: Cómo cambia `this` en distintos contextos(en métodos, en funciones, y en el ámbito global).
                        Problemas comunes **: Ejemplos donde `this` no es lo que se espera(como en funciones internas).
                    </p>

                    <h2>Contexto de`this`</h2>

                    <p>
                        Ámbito de `this` en funciones **: Cómo el contexto de `this` varía en funciones regulares, métodos y arrow functions.
                        Uso en clases y objetos **: `this` en métodos de clase y en constructores.
                        Ámbito léxico en arrow functions **: Cómo el `this` en una arrow function hereda el contexto del `this` exterior.
                    </p>

                    <h2>Cambiando el contexto</h2>

                    <p>
                        Métodos`call`, `apply`, y`bind` **:
                        `call` **: Cambiar el contexto de `this` pasando los argumentos uno a uno.
                        `apply` **: Cambiar el contexto de `this` pasando los argumentos como array.
                        `bind` **: Crear una nueva función con un contexto de `this` fijado.
                        Usos comunes **: Ejemplos prácticos de cuándo y por qué cambiar el contexto(eventos en navegadores, herencia, etc.).
                        Arrow functions vs.funciones normales **: Diferencias en el uso y cómo afecta el contexto de`this`.
                    </p>

                    <h1>Prototipos</h1>

                    <h2>4 Principios de la POO</h2>

                    <p>
                        Encapsulación **: Agrupación de datos y métodos en una estructura(como un objeto o clase) y control de su acceso.
                        Abstracción **: Ocultación de detalles internos complejos, proporcionando una interfaz simplificada.
                        Herencia **: Creación de nuevas estructuras(clases u objetos) que adquieren propiedades de otras.
                        Polimorfismo **: Capacidad de los objetos para compartir la misma interfaz y responder de manera específica según su tipo.
                    </p>

                    <h2>Herencia</h2>

                    <p>
                        Concepto de herencia en JavaScript **: Entender cómo un objeto puede "heredar" propiedades y métodos de otro objeto o clase.
                        Uso de`Object.create()` **: Crear objetos heredando prototipos específicos.
                        Clases en ES6 **: Cómo las clases en JavaScript implementan herencia de forma más sencilla que los prototipos.
                    </p>

                    <h2>Prototipos</h2>

                    <p>
                        Sistema de prototipos en JavaScript **: Entender que cada objeto tiene una referencia interna(`[[Prototype]]`) a otro objeto.
                        Objeto`prototype` **: Cómo funciona y se usa el `prototype` en funciones constructoras para definir métodos y propiedades compartidas.
                        Prototypal Chain **: Cadena de prototipos que permite a los objetos buscar propiedades y métodos en su prototipo si no están definidos localmente.
                    </p>

                    <h2>Prototipos VS Instancias</h2>

                    <p>
                        Diferencia entre prototipos e instancias **: Qué se comparte entre instancias(métodos del prototipo) y qué es exclusivo de cada instancia(propiedades propias).
                        Métodos compartidos **: Ventajas de definir métodos en el prototipo en lugar de dentro de cada instancia.
                        Instancias **: Cómo crear instancias que contienen sus propias propiedades, pero comparten métodos con otros objetos de la misma clase / prototipo.
                    </p>

                    <h2>Iterando Propiedades</h2>

                    <p>
                        Métodos de iteración de propiedades **: `for...in`, `Object.keys()`, `Object.values()`, y`Object.entries()`.
                        Propiedades enumerables **: Qué significa que una propiedad sea enumerable y cómo afecta la iteración.
                        Distinguir propiedades propias y heredadas **: Uso de `hasOwnProperty()` para identificar las propiedades definidas en el propio objeto versus las del prototipo.
                    </p>

                    <h2>Extendiendo Prototipos</h2>

                    <p>
                        Extensión de prototipos **: Agregar nuevos métodos y propiedades al `prototype` de una función constructora.
                        Extender tipos nativos **: Riesgos y ventajas de modificar los prototipos de tipos nativos como `Array` o`String`.
                        Compatibilidad y conflictos **: Consideraciones al extender prototipos, especialmente en librerías compartidas.
                    </p>

                    <h2>Implementando Herencia</h2>

                    <p>
                        Herencia prototipal **: Usar prototipos para crear una relación entre objetos que permita la herencia de métodos y propiedades.
                        Clases en ES6 **: Uso de `extends` y `super` en ES6 para implementar herencia de manera más legible y estructurada.
                        Prototipos heredados **: Cómo funcionan los prototipos en la herencia para compartir métodos entre subclases y superclases.
                    </p>

                    <h2>Constructor Padre</h2>

                    <p>
                        Uso del constructor padre **: Llamada al constructor del objeto o clase padre desde la subclase usando`super`.
                        Configuración de propiedades heredadas **: Cómo inicializar las propiedades del constructor padre en una subclase.
                        Superclase y subclase **: Definir y diferenciar entre una clase base(padre) y una clase derivada(hija).
                    </p>

                    <h2>Method Override</h2>

                    <p>
                        Sobrescribir métodos **: Cómo una subclase puede redefinir los métodos heredados de una superclase.
                        Uso de`super.methodName()` **: Llamada al método de la superclase desde la subclase para extender la funcionalidad.
                        Buenas prácticas **: Casos donde es recomendable sobrescribir métodos y cómo hacerlo de manera efectiva.
                    </p>

                    <h2>Polimorfismo</h2>

                    <p>
                        Polimorfismo en JavaScript **: Capacidad de múltiples clases de compartir la misma interfaz(métodos) con implementaciones específicas.
                        Uso de polimorfismo en herencia **: Crear métodos comunes con comportamientos específicos en clases derivadas.
                        Ventajas de polimorfismo **: Ejemplos prácticos de cómo el polimorfismo facilita la expansión y mantenimiento del código.
                    </p>

                    <h2>Composición VS Herencia</h2>

                    <p>
                        Concepto de composición **: Creación de objetos complejos a partir de componentes más simples en lugar de usar herencia.
                        Diferencias entre composición y herencia **: Ventajas de cada enfoque y casos de uso recomendados.
                        Patrones de composición **: Ejemplos como el patrón "Módulo" o la técnica "Mixin" para combinar funcionalidades.
                    </p>

                    <h2>Mixins</h2>

                    <p>
                        Concepto de Mixins **: Definición de objetos o funciones que contienen métodos y propiedades para combinar en otros objetos.
                        Implementación de Mixins **: Uso de funciones o `Object.assign()` para mezclar métodos en un objeto o clase.
                        Ventajas y casos de uso **: Flexibilidad al agregar comportamientos sin herencia, permitiendo una "herencia múltiple" en JavaScript.
                    </p>

                    <h1>Asincronía</h1>

                    <h2>Conceptos</h2>

                    <p>
                        Concepto de asincronía**: Explicación de la diferencia entre código síncrono y asíncrono.
                        Event Loop**: Comprensión básica de cómo funciona el event loop en JavaScript y su papel en la ejecución de tareas asíncronas.
                        Callbacks**: Introducción a los callbacks como la primera técnica usada para manejar operaciones asíncronas y sus limitaciones (como el "callback hell").
                    </p>

                    <h2>Promesas</h2>

                    <p>
                        ¿Qué es una promesa ?**: Concepto de promesa como un objeto que representa la eventual finalización(o falla) de una operación asíncrona.
                        Estados de las promesas **: Explicación de los estados(`pending`, `fulfilled`, y`rejected`) y cómo las promesas se mueven entre ellos.
                        Métodos`.then()` y`.catch()` **: Uso de estos métodos para manejar resultados de éxito y errores en promesas.
                    </p>

                    <h2>Cadena</h2>

                    <p>
                        Encadenamiento de promesas **: Cómo estructurar varias operaciones asíncronas en secuencia usando `.then()` para mejorar la legibilidad del código.
                        Propagación de errores **: Cómo manejar errores en una cadena de promesas sin romper el flujo.
                    </p>

                    <h2>Catch y Finally</h2>

                    <p>
                        Método`.catch()` **: Captura de errores en una cadena de promesas y cómo usarlos para manejar excepciones de forma centralizada.
                        Método`.finally()` **: Uso de `.finally()` para ejecutar código independientemente del resultado, como tareas de limpieza o registro.
                    </p>

                    <h2>Métodos estáticos</h2>

                    <p>
                        `Promise.resolve()` y`Promise.reject()` **: Métodos para crear promesas que ya están en un estado de éxito o error.
                        `Promise.all()`, `Promise.race()`, `Promise.any()`, `Promise.allSettled()` **: Métodos que permiten controlar y combinar múltiples promesas en paralelo.
                    </p>

                    <h2>Paralelo, `all` y`race`</h2>

                    <p>
                        `Promise.all()` **: Ejecutar múltiples promesas en paralelo y obtener un solo resultado si todas se cumplen o una falla.
                        Promise.race()` **: Correr promesas en paralelo y obtener el primer resultado que se complete(ya sea éxito o error).
                        Ejemplos prácticos **: Situaciones en las que se podría usar `all` y `race` para manejar tareas concurrentes, como la carga de múltiples recursos o la espera de la respuesta más rápida.
                    </p>

                    <h2>Paralelo, `any` y`allSettled`</h2>

                    <p>
                        `Promise.any()` **: Esperar a que cualquiera de las promesas en un conjunto se cumpla con éxito.
                        `Promise.allSettled()` **: Ejecutar promesas en paralelo sin importar el resultado, obteniendo información sobre todas ellas, sean éxito o error.
                        Usos y ejemplos **: Casos de uso en los que estas funciones son útiles, como cuando se necesitan resultados parciales o cuando se desea manejar errores individualmente.
                    </p>

                    <h2>Argumentos</h2>

                    <p>
                        Manejo de argumentos en promesas **: Pasar datos desde una promesa a la siguiente en una cadena de promesas.
                        Uso de `.then()` para encadenar datos **: Cómo se pueden transformar y transferir datos entre promesas encadenadas.
                        Errores comunes **: Evitar confusiones con argumentos y scope en funciones anidadas dentro de promesas.
                    </p>

                    <h2>`async` y`await`</h2>

                    <p>
                        Introducción a `async` y`await` **: Facilitar el manejo de promesas mediante una sintaxis más legible y estructurada.
                        Creación de funciones`async` **: Cómo `async` convierte una función en una que devuelve una promesa.
                        Uso de`await` **: Suspender la ejecución de la función hasta que la promesa se resuelva y obtener su valor.
                        Manejo de errores con `try/catch` en funciones`async` **: Cómo capturar errores dentro de funciones asíncronas usando bloques`try/catch`.
                    </p>

                    <h1>Fetch</h1>

                    <h2>Conceptos</h2>

                    <p>
                        Introducción a`fetch` **: API moderna para hacer solicitudes HTTP en JavaScript.
                        Sintaxis básica **: Cómo hacer una solicitud GET con `fetch` y obtener una respuesta en formato JSON.
                        Métodos HTTP(GET, POST, etc.) **: Uso de `fetch` para realizar otros tipos de solicitudes, como POST, enviando datos en el cuerpo de la solicitud.
                    </p>

                    <h2>APIs REST</h2>

                    <p>
                        Concepto de APIs REST **: Comprensión de cómo funcionan las APIs RESTful y cómo `fetch` permite interactuar con ellas.
                        Operaciones CRUD **: Ejemplos prácticos de solicitudes para crear, leer, actualizar y eliminar datos en una API REST usando`fetch`.
                    </p>

                    <h2>Opciones de Fetch</h2>

                    <p>
                        Configuración avanzada de`fetch` **: Modificación de opciones de la solicitud, como los encabezados, el método y el cuerpo.
                        Configuración de encabezados **: Añadir encabezados de autorización o personalizar encabezados para peticiones específicas.
                        Otras opciones de`fetch` **: Controlar el modo(como`cors` o`no-cors`), credenciales, y otros parámetros de la solicitud.
                    </p>

                    <h2>Abortar Fetch</h2>

                    <p>
                        AbortController **: Cómo usar `AbortController` para cancelar una solicitud `fetch` en curso.
                        Abortar solicitudes **: Ejemplos de cuándo es útil abortar una solicitud, como al cambiar de página o al recibir datos incompletos.
                        Manejo de errores al abortar **: Cómo capturar y manejar los errores cuando una solicitud se aborta, mejorando la experiencia del usuario.
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
