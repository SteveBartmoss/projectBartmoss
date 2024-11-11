import { DivArticle, DivContent, DivTopicos } from "../../componentes/contenedores/contenedores"
import { ExtendPanel } from "../../componentes/extendpanel/ExtendPanel"
import { Portada } from "../../componentes/portada/portada"


export function RoadMapJs() {
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Road map Js"} text={"Por Steve 04/11/2024"} />

            <DivArticle>

                <DivContent>
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

                    <ExtendPanel title='Alcance (Scope)'>
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

                    <ExtendPanel title='Arguments'>
                        <p>
                            Objeto arguments: Cómo acceder a todos los argumentos pasados a una función, especialmente en funciones que no especifican parámetros explícitos.
                        </p>
                        <p>
                            Limitaciones de arguments en arrow functions: Explicación de por qué arguments no funciona en arrow functions.
                        </p>
                        <p>
                            Uso de arguments.length: Determinar la cantidad de argumentos en una función, especialmente cuando se usan parámetros variables.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Fat Arrow Function ( => )'>
                        <p>
                            Sintaxis básica: Introducción a la sintaxis de las arrow functions.
                        </p>
                        <p>
                            Ventajas: Simplificación del código, especialmente en funciones cortas y de una línea.
                        </p>
                        <p>
                            Limitaciones: Ausencia del objeto arguments y del propio this.
                        </p>
                        <p>
                            Ámbito léxico de this Cómo las arrow functions no tienen su propio this, lo que evita problemas de alcance.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Rest'>
                        <p>
                            Sintaxis de Rest(`...args`): Recolección de argumentos restantes en una función.
                        </p>
                        <p>
                            Uso en funciones: Cómo manejar múltiples argumentos de entrada de manera flexible.
                        </p>
                        <p>
                            Distinción con arguments: Diferencias entre ...args y arguments, especialmente en arrow functions.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Parámetros predeterminados'>
                        <p>
                            Parámetros con valores por defecto: Establecer valores predeterminados para parámetros en funciones.
                        </p>
                        <p>
                            Orden de los parámetros: Colocar los parámetros predeterminados al final para evitar conflictos.
                        </p>
                        <p>
                            Uso de expresiones: Asignar un valor predeterminado basado en el valor de otros parámetros.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Param Destructuring'>
                        <p>
                            Destructuración de parámetros: Extraer propiedades directamente de objetos pasados como argumentos.
                        </p>
                        <p>
                            Parámetros con valores predeterminados: Destructuración combinada con valores predeterminados.
                        </p>
                        <p>
                            Aplicación en funciones: Cómo simplificar la obtención de propiedades de objetos y arrays dentro de funciones.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Getters y Setters'>
                        <p>
                            Definición de getters y setters: Creación de funciones get y set dentro de objetos y clases.
                        </p>
                        <p>
                            Uso en encapsulación de datos **: Control de acceso a propiedades privadas o internas.
                        </p>
                        <p>
                            Ventajas: Permitir lógica adicional al acceder o modificar una propiedad, y validar datos de entrada.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Try y Catch'>
                        <p>
                            Bloque try...catch: Manejo de excepciones en JavaScript, estructura básica.
                        </p>
                        <p>
                            try...catch...finally: Uso de finally para ejecutar código independientemente de los errores.
                        </p>
                        <p>
                            Propagación de errores: Cómo los errores se "propagan" y pueden capturarse en niveles superiores.
                        </p>
                        <p>
                            Manejo de errores en funciones asincrónicas: Introducción a async / await y cómo usar try...catch con promesas.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='this'>
                        <p>
                            Definición básica: Explicación de this como referencia al contexto de ejecución actual.
                        </p>
                        <p>
                            this en objetos y funciones: Cómo cambia this en distintos contextos(en métodos, en funciones, y en el ámbito global).
                        </p>
                        <p>
                            Problemas comunes: Ejemplos donde this no es lo que se espera(como en funciones internas).
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Contexto de this'>
                        <p>
                            Ámbito de this en funciones: Cómo el contexto de this varía en funciones regulares, métodos y arrow functions.
                        </p>
                        <p>
                            Uso en clases y objetos: this en métodos de clase y en constructores.
                        </p>
                        <p>
                            Ámbito léxico en arrow functions: Cómo el this en una arrow function hereda el contexto del this exterior.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Cambiando el contexto'>
                        <p>
                            Métodos call, apply, y bind: call Cambiar el contexto de this pasando los argumentos uno a uno.
                            apply Cambiar el contexto de this pasando los argumentos como array. bind Crear una nueva función con un contexto de this fijado.
                        </p>
                        <p>
                            Usos comunes: Ejemplos prácticos de cuándo y por qué cambiar el contexto(eventos en navegadores, herencia, etc.).
                        </p>
                        <p>
                            Arrow functions vs.funciones normales: Diferencias en el uso y cómo afecta el contexto de this.
                        </p>
                    </ExtendPanel>

                    <h1>Prototipos</h1>

                    <ExtendPanel title='4 Principios de la POO'>
                        <p>
                            Encapsulación: Agrupación de datos y métodos en una estructura(como un objeto o clase) y control de su acceso.
                        </p>
                        <p>
                            Abstracción: Ocultación de detalles internos complejos, proporcionando una interfaz simplificada.
                        </p>
                        <p>
                            Herencia: Creación de nuevas estructuras(clases u objetos) que adquieren propiedades de otras.
                        </p>
                        <p>
                            Polimorfismo: Capacidad de los objetos para compartir la misma interfaz y responder de manera específica según su tipo.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Herencia'>

                        <p>
                            Concepto de herencia en JavaScript: Entender cómo un objeto puede "heredar" propiedades y métodos de otro objeto o clase.
                        </p>
                        <p>
                            Uso de Object.create(): Crear objetos heredando prototipos específicos.
                        </p>

                        <p>
                            Clases en ES6: Cómo las clases en JavaScript implementan herencia de forma más sencilla que los prototipos.
                        </p>

                    </ExtendPanel>

                    <ExtendPanel title='Prototipos'>
                        <p>
                            Sistema de prototipos en JavaScript: Entender que cada objeto tiene una referencia interna([[Prototype]]) a otro objeto.
                        </p>
                        <p>
                            Objeto prototype: Cómo funciona y se usa el prototype en funciones constructoras para definir métodos y propiedades compartidas.
                        </p>
                        <p>
                            Prototypal Chain: Cadena de prototipos que permite a los objetos buscar propiedades y métodos en su prototipo si no están definidos localmente.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Prototipos VS Instancias'>
                        <p>
                            Diferencia entre prototipos e instancias: Qué se comparte entre instancias(métodos del prototipo) y qué es exclusivo de cada instancia(propiedades propias).
                        </p>
                        <p>
                            Métodos compartidos: Ventajas de definir métodos en el prototipo en lugar de dentro de cada instancia.
                        </p>
                        <p>
                            Instancias: Cómo crear instancias que contienen sus propias propiedades, pero comparten métodos con otros objetos de la misma clase / prototipo.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Iterando Propiedades'>
                        <p>
                            Métodos de iteración de propiedades: for...in, Object.keys(), Object.values(), y Object.entries().
                        </p>
                        <p>
                            Propiedades enumerables: Qué significa que una propiedad sea enumerable y cómo afecta la iteración.
                        </p>
                        <p>
                            Distinguir propiedades propias y heredadas: Uso de hasOwnProperty() para identificar las propiedades definidas en el propio objeto versus las del prototipo.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Extendiendo Prototipos'>
                        <p>
                            Extensión de prototipos: Agregar nuevos métodos y propiedades al prototype de una función constructora.
                        </p>
                        <p>
                            Extender tipos nativos: Riesgos y ventajas de modificar los prototipos de tipos nativos como Array o String.
                        </p>
                        <p>
                            Compatibilidad y conflictos: Consideraciones al extender prototipos, especialmente en librerías compartidas.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Implementando Herencia'>
                        <p>
                            Herencia prototipal: Usar prototipos para crear una relación entre objetos que permita la herencia de métodos y propiedades.
                        </p>
                        <p>
                            Clases en ES6: Uso de extends y super en ES6 para implementar herencia de manera más legible y estructurada.
                        </p>
                        <p>
                            Prototipos heredados: Cómo funcionan los prototipos en la herencia para compartir métodos entre subclases y superclases.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Constructor Padre'>
                        <p>
                            Uso del constructor padre: Llamada al constructor del objeto o clase padre desde la subclase usando super.
                        </p>
                        <p>
                            Configuración de propiedades heredadas: Cómo inicializar las propiedades del constructor padre en una subclase.
                        </p>
                        <p>
                            Superclase y subclase: Definir y diferenciar entre una clase base(padre) y una clase derivada(hija).
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Method Override'>
                        <p>
                            Sobrescribir métodos: Cómo una subclase puede redefinir los métodos heredados de una superclase.
                        </p>
                        <p>
                            Uso de super.methodName(): Llamada al método de la superclase desde la subclase para extender la funcionalidad.
                        </p>
                        <p>
                            Buenas prácticas: Casos donde es recomendable sobrescribir métodos y cómo hacerlo de manera efectiva.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Polimorfismo'>
                        <p>
                            Polimorfismo en JavaScript: Capacidad de múltiples clases de compartir la misma interfaz(métodos) con implementaciones específicas.
                        </p>
                        <p>
                            Uso de polimorfismo en herencia: Crear métodos comunes con comportamientos específicos en clases derivadas.
                        </p>
                        <p>
                            Ventajas de polimorfismo: Ejemplos prácticos de cómo el polimorfismo facilita la expansión y mantenimiento del código.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Composición VS Herencia'>
                        <p>
                            Concepto de composición: Creación de objetos complejos a partir de componentes más simples en lugar de usar herencia.
                        </p>
                        <p>
                            Diferencias entre composición y herencia: Ventajas de cada enfoque y casos de uso recomendados.
                        </p>
                        <p>
                            Patrones de composición: Ejemplos como el patrón "Módulo" o la técnica "Mixin" para combinar funcionalidades.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Mixins'>
                        <p>
                            Concepto de Mixins: Definición de objetos o funciones que contienen métodos y propiedades para combinar en otros objetos.
                        </p>
                        <p>
                            Implementación de Mixins: Uso de funciones o Object.assign() para mezclar métodos en un objeto o clase.
                        </p>
                        <p>
                            Ventajas y casos de uso: Flexibilidad al agregar comportamientos sin herencia, permitiendo una "herencia múltiple" en JavaScript.
                        </p>
                    </ExtendPanel>

                    <h1>Asincronía</h1>

                    <ExtendPanel title='Conceptos'>
                        <p>
                            Concepto de asincronía: Explicación de la diferencia entre código síncrono y asíncrono.
                        </p>
                        <p>
                            Event Loop: Comprensión básica de cómo funciona el event loop en JavaScript y su papel en la ejecución de tareas asíncronas.
                        </p>
                        <p>
                            Callbacks: Introducción a los callbacks como la primera técnica usada para manejar operaciones asíncronas y sus limitaciones (como el "callback hell").
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Promesas'>
                        <p>
                            ¿Qué es una promesa ?: Concepto de promesa como un objeto que representa la eventual finalización(o falla) de una operación asíncrona.
                        </p>
                        <p>
                            Estados de las promesas: Explicación de los estados(pending, fulfilled, y rejected) y cómo las promesas se mueven entre ellos.
                        </p>
                        <p>
                            Métodos .then() y .catch(): Uso de estos métodos para manejar resultados de éxito y errores en promesas.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Cadena'>
                        <p>
                            Encadenamiento de promesas: Cómo estructurar varias operaciones asíncronas en secuencia usando `.then()` para mejorar la legibilidad del código.
                        </p>
                        <p>
                            Propagación de errores **: Cómo manejar errores en una cadena de promesas sin romper el flujo.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Catch y Finally'>
                        <p>
                            Método .catch(): Captura de errores en una cadena de promesas y cómo usarlos para manejar excepciones de forma centralizada.
                        </p>
                        <p>
                            Método .finally(): Uso de .finally() para ejecutar código independientemente del resultado, como tareas de limpieza o registro.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Métodos estáticos'>
                        <p>
                            Promise.resolve()  y Promise.reject(): Métodos para crear promesas que ya están en un estado de éxito o error.
                        </p>
                        <p>
                            Promise.all(), Promise.race(), Promise.any(), Promise.allSettled(): Métodos que permiten controlar y combinar múltiples promesas en paralelo.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Paralelo, all y race'>
                        <p>
                            Promise.all(): Ejecutar múltiples promesas en paralelo y obtener un solo resultado si todas se cumplen o una falla.
                        </p>
                        <p>
                            Promise.race(): Correr promesas en paralelo y obtener el primer resultado que se complete(ya sea éxito o error).
                        </p>
                        <p>
                            Ejemplos prácticos: Situaciones en las que se podría usar all y race para manejar tareas concurrentes, como la carga de múltiples recursos o la espera de la respuesta más rápida.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Paralelo, any y allSettled'>
                        <p>
                            Promise.any(): Esperar a que cualquiera de las promesas en un conjunto se cumpla con éxito.
                        </p>
                        <p>
                            Promise.allSettled(): Ejecutar promesas en paralelo sin importar el resultado, obteniendo información sobre todas ellas, sean éxito o error.
                        </p>
                        <p>
                            Usos y ejemplos **: Casos de uso en los que estas funciones son útiles, como cuando se necesitan resultados parciales o cuando se desea manejar errores individualmente.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='Argumentos'>
                        <p>
                            Manejo de argumentos en promesas: Pasar datos desde una promesa a la siguiente en una cadena de promesas.
                        </p>
                        <p>
                            Uso de .then() para encadenar datos: Cómo se pueden transformar y transferir datos entre promesas encadenadas.
                        </p>
                        <p>
                            Errores comunes: Evitar confusiones con argumentos y scope en funciones anidadas dentro de promesas.
                        </p>
                    </ExtendPanel>

                    <ExtendPanel title='async y await'>
                        <p>
                            Introducción a async y await: Facilitar el manejo de promesas mediante una sintaxis más legible y estructurada.
                        </p>
                        <p>
                            Creación de funciones async: Cómo async convierte una función en una que devuelve una promesa.
                        </p>
                        <p>
                            Uso de await: Suspender la ejecución de la función hasta que la promesa se resuelva y obtener su valor.
                        </p>
                        <p>
                            Manejo de errores con try/catch en funciones async: Cómo capturar errores dentro de funciones asíncronas usando bloques`try/catch`.
                        </p>
                    </ExtendPanel>

                </DivContent>

                <DivTopicos>

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
