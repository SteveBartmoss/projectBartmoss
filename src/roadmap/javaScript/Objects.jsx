import { CodeSpace } from "../../componentes/codeSpace/CodeSpace";
import { CodeSpaceV3 } from "../../componentes/codeSpace/CodeSpaceV3";
import { CodeSpaceV4 } from "../../componentes/codeSpace/CodeSpaceV4";
import { DivArticle, DivCol, DivContent, DivRow } from "../../componentes/contenedores/contenedores";
import { Divider } from "../../componentes/divider/Divider";
import { Portada } from "../../componentes/portada/portada";
import { TreeMap } from "../../componentes/treeMap/TreeMap";


export function MapObjects() {

    const pageMap=[ 
        {
            id: 1,
            section:'Objects',
            childs: [
                {
                    titulo: 'Propiedades dinámicas',
                    id: 'propiedadesDinamicas',
                },
                {
                    titulo: 'Métodos Dinámicos en JavaScript',
                    id: 'metodosDinamicos',
                },
                {
                    titulo: 'Acceso a Propiedades en JavaScript',
                    id: 'accesoPropiedades'
                },
                {
                    titulo: 'Enumeración de Propiedades en JavaScript',
                    id: 'enumeracionPropiedades',
                },
                {
                    titulo: 'Mutabilidad en Objetos en JavaScript',
                    id: 'mutabilidadObjetos',
                }
            ]
        },
        {
            id: 2,
            section: 'Funciones',
            childs: [
                {
                    titulo: 'Funciones de Fábrica en JavaScript',
                    id: 'funcionesFabrica',
                },
            ]
        }
    ]

    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Objects"} text={"Por Steve 04/11/2024"} />

            <DivRow>
                <DivCol>
                    <TreeMap titulo={'Contenido de la pagina'} elementos={pageMap} />
                </DivCol>
                <DivCol>
                    <DivArticle>
                        <DivContent>
                            <h1 id='propiedadesDinamicas'>Propiedades dinámicas</h1>

                            <p>
                                En JavaScript, los objetos son dinámicos, lo que permite añadir, modificar
                                o eliminar propiedades y métodos en cualquier momento después de la creación del objeto.
                            </p>

                            <h2>Añadir propiedades dinámicamente</h2>

                            <p>
                                En JavaScript, puedes agregar propiedades a un objeto en cualquier momento, incluso después de haberlo creado.
                            </p>

                            <CodeSpaceV4 title={'Ejemplo'}
                            rawCode={`const persona = {\n nombre: "Juan"\n }\n persona.edad = 30; //Añadiendo la propiedad 'edad' en tiempo de ejecucion \n console.log(persona); //nombre: 'Juan', edad: 30 \n`} />
                            

                            <p>
                                También se puede añadir una propiedad usando corchetes [], lo cual es útil cuando el nombre de la propiedad está almacenado en una variable:
                            </p>

                            <CodeSpaceV3 title={'Ejemplo'}
                                rawCode={`const key = "ocupacion";\n persona[key]="Desarrollador";\n`} />

                            <h2>Modificar propiedades dinámicamente</h2>

                            <p>
                                Modificar una propiedad es tan sencillo como reasignarle un valor:
                            </p>

                            <CodeSpaceV3 title={'Ejemplo'}
                                rawCode={`persona.edad = 31; // Cambia el valor de la propiedad 'edad'\n console.log(persona); // nombre: "Juan", edad: 31, ocupacion: "Desarrollador"\n`} />

                            <h2>Eliminar propiedades dinámicamente</h2>

                            <p>
                                Para eliminar una propiedad, utiliza el operador delete:
                            </p>

                            <CodeSpaceV3 title={'Ejemplo'}
                                rawCode={`delete persona.edad; // Elimina la propiedad 'edad'\n console.log(persona); // nombre: "Juan", ocupacion: "Desarrollador"\n`} />

                            <Divider />

                            <h1 id="metodosDinamicos">Métodos Dinámicos en JavaScript</h1>

                            <p>
                                Un método en JavaScript es simplemente una propiedad de un objeto que contiene una función. Puedes agregar, modificar y eliminar métodos en tiempo de ejecución de la misma forma que con las propiedades.
                            </p>

                            <h2>Añadir Métodos Dinámicamente</h2>

                            <p>
                                Puedes añadir un método asignando una función a una propiedad del objeto.
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`persona.saludar = function() {\n console.log('Hola, soy $ {this.nombre}') }\n persona.saludar() // "Hola, soy Ana"\n`} />

                            <p>
                                También se puede añadir un metodo usando corchetes [], esto es útil cuando el nombre del método está almacenado en una variable.
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`const metodo = "despedirse"\n persona[metodo] = function() {\n console.log("Adiós!")\n }\n persona.despedirse() // "Adiós!"\n`} />

                            <h2>Modificar Métodos Dinámicamente</h2>

                            <p>Puedes modificar un método reasignándolo a una nueva función.</p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`persona.saludar = function() {\n console.log('Hola, mi nombre es $ {;this.nombre} y tengo $ {this.edad} años')\n }\n persona.saludar() // "Hola, mi nombre es Ana y tengo 26 años"\n`} />

                            <h2>Eliminar Métodos Dinámicamente</h2>

                            <p>delete también elimina métodos del objeto.</p>

                            <CodeSpaceV3 title={'Ejemplo'} rawCode={`delete persona.saludar // Elimina el método 'saludar'\n console.log(persona.saludar) // undefined\n`} />

                            <Divider />

                            <h1 id="accesoPropiedades">Acceso a Propiedades en JavaScript</h1>

                            <p>
                                JavaScript permite acceder a las propiedades de un objeto utilizando dos tipos de notación: notación de punto y notación de corchetes. Ambas formas permiten leer, añadir, modificar o eliminar propiedades, pero tienen diferentes usos y limitaciones.
                            </p>

                            <h2>Notación de Punto (.)</h2>

                            <p>
                                Es la forma más común y directa de acceder a las propiedades de un objeto.
                                Se utiliza cuando el nombre de la propiedad es un identificador válido de JavaScript (no contiene espacios, guiones, ni empieza con un número).
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`const persona = {nombre: "Luis", edad: 30 }\n console.log(persona.nombre) // "Luis"\n console.log(persona.edad) // 30\n`} />

                            <p>
                                No se puede usar la notación de punto si el nombre de la propiedad:
                                Contiene caracteres especiales (por ejemplo, persona["nombre completo"] no funciona con persona.nombre completo).
                                Es un número o comienza con un número (persona.123 no es válido).
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`const objeto = {"nombre completo": "Luis Pérez" }\n console.log(objeto.nombre completo)\n`} />

                            <h2>Notación de Corchetes ([])</h2>

                            <p>
                                La notación de corchetes es útil cuando el nombre de la propiedad es dinámico, se almacena en una variable, o no es un identificador válido.
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`const persona = {nombre: "Luis", edad: 30 }\n const propiedad = "nombre"\n console.log(persona[propiedad]) // "Luis"\n`}/>

                            <p>
                                La notación de corchetes permite acceder a propiedades que contienen espacios, caracteres especiales o números.
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`const producto = {"precio-venta": 200, "nombre producto": "Laptop" }\n console.log(producto["precio-venta"]) // 200\n console.log(producto["nombre producto"]) // "Laptop"\n`} />

                            <p>
                                La notación de corchetes permite acceder a propiedades a través de una variable. Este enfoque es útil para acceder a propiedades basadas en condiciones o entradas de usuario.
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`const propiedad = "edad"\n console.log(persona[propiedad]) // 30\n`} />

                            <Divider />

                            <h1 id="enumeracionPropiedades">Enumeración de Propiedades en JavaScript</h1>

                            <p>
                                La enumeración de propiedades en un objeto es una técnica importante en JavaScript, especialmente para trabajar con estructuras de datos dinámicas o desconocidas. Los métodos disponibles (for...in, Object.keys, Object.values, y Object.entries) permiten acceder y recorrer las propiedades y valores de un objeto de maneras diferentes, cada uno con sus ventajas.
                            </p>

                            <h2>for...in</h2>

                            <p>
                                El bucle for...in itera sobre todas las propiedades enumerables de un objeto, incluidas tanto las propiedades propias como las heredadas del prototipo.
                                Este bucle es útil para obtener el nombre de cada propiedad, pero es recomendable combinarlo con hasOwnProperty() para asegurarse de que la propiedad pertenece directamente al objeto y no a su prototipo.
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={` const persona = { nombre: "Luis", edad: 30, ocupacion: "Ingeniero" }\n for (const propiedad in persona) {\n if (persona.hasOwnProperty(propiedad)) {\n console.log('$ {123;propiedad}: $ {persona[propiedad]} ')\n }\n }\n`} /> 

                            <p>
                                Este bucle es útil cuando necesitas iterar tanto sobre las propiedades propias como heredadas de un objeto.
                                Es especialmente relevante en objetos donde el prototipo juega un papel importante.
                            </p>

                            <h2>Object.keys()</h2>

                            <p>
                                Object.keys() devuelve un array con los nombres (claves) de las propiedades propias y enumerables de un objeto, excluyendo las heredadas.
                                El método es ideal cuando solo necesitas las claves sin preocuparte por las propiedades del prototipo.
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`const producto = {nombre: "Laptop", precio: 1500, disponible: true }\n const propiedades = Object.keys(producto)\n console.log(propiedades) // ["nombre", "precio", "disponible"]\n`} />

                            <h3>Iteración Usando forEach</h3>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`propiedades.forEach(propiedad => {\n console.log('$ {propiedad}: $ {producto[propiedad]}');\n })\n`} />

                            <p>
                                Es útil para obtener una lista de todas las claves del objeto, especialmente si no necesitas iterar sobre propiedades heredadas.
                                Object.keys() es más seguro y específico que for...in para evitar propiedades del prototipo.
                            </p>

                            <h2>Object.values()</h2>

                            <p>
                                Object.values() devuelve un array con los valores de las propiedades propias y enumerables del objeto.
                                Es ideal cuando necesitas trabajar solo con los valores sin preocuparte por las claves.
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`const usuario = { nombre: "Ana", edad: 25, pais: "México" }\n const valores = Object.values(usuario);\n console.log(valores); // ["Ana", 25, "México"]\n`} />

                            <p>
                                Iteración Usando forEach
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`valores.forEach(valor => {\n console.log(valor)\n })\n`} />

                            <p>
                                Ideal para casos en los que solo necesitas los valores de las propiedades, como cuando quieres sumar valores o realizar operaciones estadísticas.
                            </p>

                            <h2>Object.entries()</h2>

                            <p>
                                Object.entries() devuelve un array de arrays, donde cada sub-array contiene un par [clave, valor].
                                Es útil para obtener tanto la clave como el valor en una estructura de datos que facilita la iteración.
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`const empleado = { nombre: "Carlos", rol: "Desarrollador", edad: 28 }\n const entradas = Object.entries(empleado)\n console.log(entradas)\n`} />

                            <p>
                                Recorriendo con forEach
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`entradas.forEach(([clave, valor]) => {\n console.log('$ {clave}: $ {valor}');\n });\n`} />

                            <p>
                                Es una excelente opción cuando necesitas tanto las claves como los valores en una estructura fácil de manejar.
                                Útil en operaciones de mapeo y transformación de objetos.
                            </p>

                            <Divider />

                            <h1 id="mutabilidadObjetos">Mutabilidad en Objetos en JavaScript</h1>

                            <p>
                                En JavaScript, los objetos son mutables por naturaleza, lo cual significa que una vez que se crea un objeto, su contenido puede modificarse a lo largo del tiempo. Esto se relaciona con cómo JavaScript maneja el paso por referencia para objetos, lo que implica que diferentes variables pueden referirse al mismo objeto en memoria. Estos conceptos son cruciales para entender cómo los datos cambian y se comparten en aplicaciones JavaScript.
                            </p>

                            <h2>¿Qué Significa que un Objeto sea Mutable?</h2>

                            <p>
                                Mutabilidad implica que puedes modificar las propiedades de un objeto después de haberlo creado.
                                Las variables que contienen objetos almacenan una referencia a la ubicación en la memoria donde se guarda el objeto, no el objeto en sí.
                                Debido a esto, los cambios realizados en el objeto a través de una variable son reflejados en todas las variables que apuntan a ese mismo objeto.
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`const persona = { nombre: "Ana", edad: 30 }\n persona.edad = 31 // Modificamos una propiedad existente\n persona.pais = "México" // Añadimos una nueva propiedad\n console.log(persona) // nombre: "Ana", edad: 31, pais: "México"\n`} />

                            <h2>Paso por Referencia vs. Paso por Valor</h2>

                            <p>
                                En JavaScript, los tipos primitivos (números, cadenas, booleanos, null y undefined) son inmutables y se pasan por valor.
                                Los objetos y arrays son mutables y se pasan por referencia.
                                Cuando pasas un objeto a una función o lo asignas a otra variable, ambas referencias apuntan al mismo lugar en memoria. Esto significa que cualquier cambio en una referencia afecta al objeto compartido.
                            </p>

                            <p>
                                Referencias en Objetos
                            </p>

                            <CodeSpaceV3 title={"Ejemplo"} rawCode={`const objeto1 = { nombre: "Carlos" }\n const objeto2 = objeto1 // Ambos apuntan al mismo objeto\n objeto2.nombre = "Luis"\n console.log(objeto1.nombre) // "Luis" (ambas variables reflejan el cambio)\n`} />

                            <p>
                                Paso por Referencia en Funciones
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`function actualizarEdad(persona) {
                            persona.edad = 35
                        }

                        const persona = { nombre: "Lucía", edad: 28 }
                        actualizarEdad(persona)
                        console.log(persona.edad) // 35 (la función modifica el objeto original)`} />

                            <h2>Cómo Evitar Efectos Colaterales: Copias de Objetos</h2>

                            <p>
                                Para evitar modificar el objeto original (mutación) cuando trabajas con referencias, puedes crear una copia del objeto. Existen diferentes formas de hacerlo en JavaScript:
                                Asignación mediante &#123;...objeto&#125; (Spread Operator): Crea una copia superficial del objeto.
                                Object.assign(): También crea una copia superficial del objeto.
                                Clonación profunda: Cuando el objeto contiene otros objetos anidados, la copia superficial no es suficiente. Para clonar profundamente, puedes utilizar métodos como structuredClone() o bibliotecas como lodash.
                            </p>

                            <p>
                                Copia Superficial
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`const original = { nombre: "Juan", edad: 40 }
                        const copia = { ...original }

                        copia.edad = 45
                        console.log(original.edad) // 40 (el original no se modifica)
                        console.log(copia.edad)    // 45 (la copia es independiente)`} />

                            <h2>Copia Superficial vs. Copia Profunda</h2>

                            <p>
                                Copia Superficial
                                Solo copia el primer nivel de propiedades del objeto. Si el objeto contiene referencias a otros objetos, estas referencias se copian como tal (no el contenido).
                                Esto puede llevar a efectos colaterales si el objeto original contiene objetos anidados.
                            </p>

                            <p>
                                Copia Profunda
                                Copia todos los niveles de anidación, creando un duplicado completo y desvinculado del objeto original.
                                En JavaScript, la clonación profunda se puede lograr con funciones recursivas, structuredClone(), o librerías especializadas.
                            </p>

                            <p>
                                Problema de la Copia Superficial
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`const persona = {
                            nombre: "Ana",
                            direccion: { ciudad: "Lima", pais: "Perú" }
                        }

                        const copiaSuperficial = {...persona}
                        copiaSuperficial.direccion.ciudad = "Cusco"

                        console.log(persona.direccion.ciudad) // "Cusco" (la ciudad cambia en ambas referencias)`} />

                            <p>
                                Clonación Profunda con structuredClone()
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`const persona = {
                            nombre: "Ana",
                            direccion: {ciudad: "Lima", pais: "Perú" }
                        }

                        const copiaProfunda = structuredClone(persona)
                        copiaProfunda.direccion.ciudad = "Cusco"

                        console.log(persona.direccion.ciudad) // "Lima" (el original no se ve afectado)`} />

                            <h2>Aplicaciones Prácticas de la Mutabilidad</h2>

                            <p>
                                Gestión de Estado en Aplicaciones: En frameworks como React, se suele evitar la mutabilidad directa de los estados (usar copias) para prevenir efectos colaterales y facilitar la depuración.
                                Patrones de Diseño: En patrones como el Estado Inmutable o Data-First, la mutabilidad controlada es fundamental para mantener datos consistentes.
                            </p>

                            <p>
                                Ejemplo en React (Evitar Mutación Directa del Estado)
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`const [persona, setPersona] = useState({nombre: "Pedro", edad: 25 });

                        function actualizarEdad() {
                        // Usamos una copia para evitar mutación directa
                        setPersona(prevPersona => ({ ...prevPersona, edad: prevPersona.edad + 1 }));
                        }`} />

                            <Divider />

                            <h1 id="funcionesFabrica">Funciones de Fábrica en JavaScript</h1>

                            <p>
                                Las funciones de fábrica son un patrón de diseño en JavaScript que permite crear objetos de manera flexible y reutilizable. A diferencia de las funciones constructores, las funciones de fábrica no requieren el uso del operador new y son ideales para crear múltiples instancias de un objeto con una lógica común.
                            </p>

                            <h2>¿Qué es una Función de Fábrica?</h2>

                            <p>
                                Una función de fábrica es una función que devuelve un nuevo objeto cada vez que es invocada.
                                Permiten encapsular la lógica de creación de objetos y pueden incluir propiedades y métodos.
                                Se utilizan comúnmente para crear objetos similares sin necesidad de definir una clase o utilizar el operador new.
                            </p>

                            <p>
                                Ejemplo Básico de una Función de Fábrica
                            </p>

                            <CodeSpace title={'Ejemplo'} rawCode={`function crearPersona(nombre, edad) {
                            return {
                                nombre: nombre,
                                edad: edad,
                                saludar: function() {
                                    console.log('Hola, mi nombre es $ {this.nombre} y tengo $ {this.edad} años.')
                                }
                            }
                        }

                        const persona1 = crearPersona("Ana", 30)
                        const persona2 = crearPersona("Luis", 25)

                        persona1.saludar() // "Hola, mi nombre es Ana y tengo 30 años."
                        persona2.saludar() // "Hola, mi nombre es Luis y tengo 25 años."`} />

                            <h2>Ventajas de Usar Funciones de Fábrica</h2>

                            <p>
                                Reutilización de Código: Permiten evitar la duplicación de código al encapsular la lógica de creación.
                                Flexibilidad: Puedes modificar la función de fábrica para que genere diferentes tipos de objetos o incluya lógica adicional.
                                Manejo de Estado: Cada instancia creada por la función de fábrica puede tener su propio estado interno, permitiendo la encapsulación.
                            </p>

                            <p>
                                Ejemplo de Flexibilidad
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`function crearVehiculo(tipo, marca) {
                            return {
                                tipo: tipo,
                                marca: marca,
                                moverse: function() {
                                    console.log( 'El $ {this.marca} se está moviendo.');
                                }
                            }
                        }

                        const coche = crearVehiculo("coche", "Toyota");
                        const moto = crearVehiculo("moto", "Yamaha");

                        coche.moverse(); // "El Toyota se está moviendo."
                        moto.moverse();  // "El Yamaha se está moviendo."`} />

                            <h2>Parámetros y Personalización</h2>

                            <p>
                                Las funciones de fábrica pueden aceptar parámetros para personalizar los objetos que crean. Esto permite que el comportamiento de los objetos se ajuste a las necesidades específicas.
                            </p>

                            <p>
                                Ejemplo con Parámetros
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`function crearLibro(titulo, autor) {
                            return {
                                titulo: titulo,
                                autor: autor,
                                leer: function() {
                                console.log('Leyendo $ {this.titulo&#125; de $ {this.autor}.');
                                }
                            }
                        }

                        const libro1 = crearLibro("1984", "George Orwell");
                        const libro2 = crearLibro("Cien años de soledad", "Gabriel García Márquez");

                        libro1.leer(); // "Leyendo 1984 de George Orwell."
                        libro2.leer(); // "Leyendo Cien años de soledad de Gabriel García Márquez."`} />

                            <h2>Encapsulamiento y Estado Privado</h2>

                            <p>
                                Las funciones de fábrica pueden utilizar cierres (closures) para crear propiedades o métodos que sean privados y no accesibles desde fuera del objeto. Esto permite un mayor control sobre el estado interno del objeto.
                            </p>

                            <p>
                                Ejemplo de Estado Privado
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`function crearContador() {
                            let conteo = 0; // Estado privado

                            return {
                                incrementar: function() {
                                    conteo++;
                                    console.log('Contador: $ {conteo});
                                },
                                obtenerConteo: function() {
                                    return conteo;
                                }
                            }
                        }

                        const contador = crearContador();
                        contador.incrementar(); // "Contador: 1"
                        contador.incrementar(); // "Contador: 2"
                        console.log(contador.obtenerConteo()); // 2`} />

                            <h2>Comparación con Funciones Constructoras</h2>

                            <p>
                                Las funciones de fábrica y las funciones constructoras son dos enfoques diferentes para crear objetos en JavaScript:
                                Funciones de Fábrica: No requieren el uso del operador new. Son más simples y adecuadas para la creación de objetos simples o cuando se necesita una lógica de creación muy específica.
                                Funciones Constructoras: Requieren el uso del operador new y permiten crear instancias de un objeto más complejo. A menudo se utilizan junto con prototipos para compartir métodos entre instancias.
                            </p>

                            <p>
                                Ejemplo de Función Constructora
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`function Persona(nombre, edad) {
                            this.nombre = nombre;
                            this.edad = edad;
                            this.saludar = function() {
                                console.log('Hola, mi nombre es $ {this.nombre} y tengo $ {this.edad} años.');
                            }
                        }

                        const persona3 = new Persona("Carlos", 40);
                        persona3.saludar(); // "Hola, mi nombre es Carlos y tengo 40 años."`} />

                            <h1>Funciones Constructoras</h1>

                            <p>
                                Las funciones constructoras son una forma de crear objetos en JavaScript mediante el uso del operador new. Cuando llamamos a una función con new, JavaScript automáticamente crea un nuevo objeto, asigna ese objeto a this dentro de la función, y lo devuelve al final de la ejecución. Esto permite crear múltiples instancias de objetos con propiedades y métodos definidos.
                            </p>

                            <h2>Creación de una Función Constructora</h2>

                            <p>
                                Para crear una función constructora:
                                Define una función cuyo nombre comienza en mayúscula (PascalCase) como convención.
                                Usa el operador new al invocarla para crear una nueva instancia de objeto.
                                Utiliza this para asignar propiedades y métodos a la nueva instancia.
                            </p>

                            <p>
                                Ejemplo Básico
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`function Persona(nombre, edad) {
                            this.nombre = nombre; // 'this' se refiere a la nueva instancia creada
                            this.edad = edad;

                            this.saludar = function() {
                                console.log('Hola, mi nombre es $ {this.nombre} y tengo $ {this.edad} años.');
                            }
                        }

                        const persona1 = new Persona("Ana", 30);
                        const persona2 = new Persona("Luis", 25);

                        persona1.saludar(); // "Hola, mi nombre es Ana y tengo 30 años."
                        persona2.saludar(); // "Hola, mi nombre es Luis y tengo 25 años."`} />

                            <p>
                                En este ejemplo, persona1 y persona2 son dos instancias de la función constructora Persona, cada una con sus propios valores de nombre y edad.
                            </p>

                            <h2>Convenciones en el Uso de Funciones Constructoras</h2>

                            <p>
                                Cuando se trabaja con funciones constructoras, existen algunas convenciones importantes a seguir para que el código sea más claro y legible:
                                Nombres en PascalCase: Los nombres de las funciones constructoras deben comenzar con mayúscula para indicar que se usan con new. Ejemplos: Persona, Coche, Animal.
                                Uso de this: Dentro de una función constructora, this hace referencia a la nueva instancia que está siendo creada. Utilizamos this para asignar propiedades o métodos a esa instancia.
                            </p>

                            <p>
                                Estas convenciones son importantes porque permiten que otros desarrolladores identifiquen rápidamente cuándo una función está destinada a usarse como un constructor.
                            </p>

                            <p>
                                Ejemplo de Convención PascalCase
                            </p>

                            <CodeSpace title="Ejemplo" rawCode={`function Animal(tipo, sonido) {
                        this.tipo = tipo;
                        this.sonido = sonido;

                        this.hacerSonido = function() {
                        console.log('El $ {this.tipo} hace $ {this.sonido}');
                        }
                        }

                        const perro = new Animal("perro", "guau");
                        const gato = new Animal("gato", "miau");

                        perro.hacerSonido(); // "El perro hace guau"
                        gato.hacerSonido(); // "El gato hace miau"`} />


                            <h2>Prototipos en Funciones Constructoras</h2>

                            <p>
                                Los prototipos permiten a las funciones constructoras compartir métodos entre todas sus instancias, lo que ahorra memoria y facilita la administración del código. Cuando se define un método en el prototipo de una función constructora, todas las instancias de esa función pueden acceder al método a través de su prototipo.
                            </p>

                            <h3>Introducción a Prototipos</h3>

                            <p>
                                Cada función en JavaScript tiene una propiedad llamada prototype. Podemos añadir métodos y propiedades al prototype de una función constructora para que todas las instancias compartan estos métodos, en lugar de definirlos directamente en cada instancia.
                            </p>

                            <p>
                                Ejemplo: Uso de Prototipos para Métodos Compartidos
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`function Vehiculo(marca, modelo) {
                            this.marca = marca;
                            this.modelo = modelo;
                        }

                        // Definir un método en el prototipo
                        Vehiculo.prototype.informacion = function() {
                        console.log('Vehículo: $ {this.marca} $ {this.modelo}');
                        }

                        const coche1 = new Vehiculo("Toyota", "Corolla");
                        const coche2 = new Vehiculo("Ford", "Focus");

                        coche1.informacion(); // "Vehículo: Toyota Corolla"
                        coche2.informacion(); // "Vehículo: Ford Focus"`} />

                            <p>
                                En este ejemplo, el método informacion es compartido entre todas las instancias de Vehiculo, lo cual es más eficiente que declarar el método dentro del constructor. Esto significa que informacion existe una sola vez en el prototipo, en lugar de duplicarse en cada instancia.
                            </p>

                            <h2>Ventajas de Usar Prototipos en Funciones Constructoras</h2>

                            <p>
                                Eficiencia de Memoria: Los métodos definidos en el prototipo se almacenan una vez, en lugar de duplicarse en cada instancia, lo que reduce el uso de memoria.
                                Consistencia: Cualquier cambio hecho a un método en el prototipo afecta a todas las instancias que heredan ese prototipo.
                                Organización: Mantiene los constructores más limpios al delegar la lógica de los métodos al prototipo.
                            </p>

                            <p>
                                Ejemplo de Comparación: Método en el Constructor vs. Método en el Prototipo
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`// Método en el constructor
                        function JugadorConMetodo(nombre) {
                        this.nombre = nombre;
                            this.jugar = function() {
                            console.log('$ {this.nombre} está jugando');
                            }
                        }

                        // Método en el prototipo
                        function JugadorConPrototipo(nombre) {
                        this.nombre = nombre;
                        }

                        JugadorConPrototipo.prototype.jugar = function() {
                        console.log('$ {this.nombre} está jugando');
                        }

                        // Crear instancias
                        const jugador1 = new JugadorConMetodo("Carlos");
                        const jugador2 = new JugadorConPrototipo("Ana");

                        // Comparación de métodos
                        console.log(jugador1.jugar === jugador2.jugar); // false, no comparten método
                        console.log(JugadorConPrototipo.prototype.jugar === jugador2.jugar); // true, comparten método`} />

                            <p>
                                Aquí, JugadorConPrototipo es más eficiente en términos de memoria porque el método jugar está definido solo una vez en el prototipo.
                            </p>

                            <Divider />

                            <h1>Nueva sintaxis para constructores</h1>

                            <p>
                                Con ES6, se introdujo la palabra clave class en JavaScript como una forma de crear objetos y gestionar herencias. Aunque class es en realidad una sintaxis especial para definir funciones constructoras, hace que el código sea más limpio y legible, y organiza mejor la lógica de creación y herencia de objetos.
                            </p>

                            <h2>Creación de Clases con class</h2>

                            <p>
                                Una clase en ES6 es una plantilla para crear objetos. Dentro de una clase, puedes definir el constructor (similar al de una función constructora) y métodos que serán compartidos por todas las instancias de esa clase.
                            </p>

                            <p>
                                Ejemplo Básico
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`class Persona {
                        constructor(nombre, edad) {
                            this.nombre = nombre;
                            this.edad = edad;
                        }

                        // Método de instancia
                        saludar() {
                        console.log('Hola, mi nombre es $ {this.nombre} y tengo $ {this.edad} años.');
                        }
                        }

                        // Crear una instancia de la clase
                        const persona1 = new Persona("Ana", 30);
                        persona1.saludar(); // "Hola, mi nombre es Ana y tengo 30 años."
                        `} />

                            <p>
                                En este ejemplo, Persona es una clase con un constructor que inicializa las propiedades nombre y edad, y un método saludar que puede ser usado por cada instancia.
                            </p>

                            <h2>Métodos de Instancia y Métodos Estáticos</h2>

                            <p>
                                Dentro de una clase, podemos definir:

                                Métodos de instancia: Estos métodos solo se pueden llamar en instancias de la clase (por ejemplo, persona1.saludar()).
                                Métodos estáticos: Métodos que pertenecen a la clase en sí misma, en lugar de a las instancias. Se definen usando la palabra clave static y se llaman directamente en la clase, sin necesidad de crear una instancia.
                            </p>

                            <h2>Definición y Uso de Métodos Estáticos</h2>

                            <p>
                                Los métodos estáticos son útiles para funciones relacionadas con la clase pero que no dependen de ninguna instancia en particular, como utilidades o métodos auxiliares.
                            </p>

                            <p>
                                Ejemplo de Métodos Estáticos y de Instancia
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`class Calculadora {
                            // Método estático
                            static sumar(a, b) {
                                return a + b;
                            }

                            // Método de instancia
                            multiplicar(a, b) {
                                return a * b;
                            }
                        }
                        // Llamada al método estático sin crear una instancia
                        console.log(Calculadora.sumar(5, 10)); // 15

                        // Crear una instancia para usar un método de instancia
                        const calculadora = new Calculadora();
                        console.log(calculadora.multiplicar(3, 4)); // 12`} />

                            <p>
                                En este ejemplo, sumar es un método estático y se accede directamente mediante Calculadora.sumar(5, 10). En cambio, multiplicar es un método de instancia y requiere crear una instancia de Calculadora antes de poder llamarlo.
                            </p>

                            <h2>Herencia con Clases</h2>

                            <p>
                                La herencia es un concepto clave en la programación orientada a objetos, y en ES6 se implementa mediante la palabra clave extends. Con extends, una clase puede heredar propiedades y métodos de otra, lo que permite crear una estructura de clases más específica y reutilizar código.
                            </p>

                            <p>
                                Para crear una clase que herede de otra:

                                Define una clase Padre con las propiedades y métodos básicos.
                                Usa extends para crear una clase Hija que herede de Padre.
                                Si necesitas un constructor en la clase hija, usa super() para llamar al constructor de la clase padre.
                            </p>

                            <p>
                                Ejemplo de Herencia
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`// Clase base o padre
                        class Animal {
                            constructor(nombre) {
                                this.nombre = nombre;
                            }

                            hacerSonido() {
                                console.log('$ {this.nombre} hace un sonido.');
                            }
                        }

                        // Clase hija que extiende de Animal
                        class Perro extends Animal {
                            constructor(nombre, raza) {
                                super(nombre); // Llamada al constructor de la clase padre
                                this.raza = raza;
                            }

                            hacerSonido() &#123;
                                console.log('$ {this.nombre} ladra.');
                            &#125;
                        }

                        const animal = new Animal("Gato");
                        animal.hacerSonido(); // "Gato hace un sonido."

                        const perro = new Perro("Firulais", "Labrador");
                        perro.hacerSonido(); // "Firulais ladra."
                        console.log(perro.raza); // "Labrador"`} />

                            <p>
                                En este ejemplo, Perro hereda de Animal. La función super(nombre) llama al constructor de Animal para inicializar nombre. La clase hija también puede sobrescribir métodos de la clase padre, como el método hacerSonido en este caso.
                            </p>

                            <h2>Sobrescritura de Métodos y super</h2>

                            <p>
                                Cuando una clase hija redefine un método de la clase padre, se dice que está sobrescribiendo el método. Sin embargo, también puede llamar al método original de la clase padre utilizando super.nombreMetodo().
                            </p>

                            <p>
                                Ejemplo de Sobrescritura de Métodos
                            </p>

                            <CodeSpace title={"Ejemplo"} rawCode={`class Vehiculo {
                            encender() {
                                console.log("El vehículo está encendido.");
                            }
                        }

                        class Coche extends Vehiculo {
                            encender() {
                                super.encender(); // Llama al método 'encender' de la clase padre
                                console.log("El coche está listo para conducir.");
                            }
                        }

                        const miCoche = new Coche();
                        miCoche.encender();
                        // "El vehículo está encendido."
                        // "El coche está listo para conducir.".`} />

                            <p>
                                En este caso, Coche sobrescribe el método encender, pero primero llama al método encender de la clase padre con super.encender(), y luego agrega su propio comportamiento.
                            </p>

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>

        </>
    )
}

/* 
contenido sin limpiar 

&#123; &gt; &#125;

*/

/*
considerar si es bueno agregar buenas practicas

### Consideraciones y Buenas Prácticas

1. **Verificar la Existencia de Propiedades y Métodos**:
   - Antes de modificar o eliminar, puedes verificar la existencia de una propiedad o método con el operador `in` o `hasOwnProperty`:
   ```javascript
   if ("edad" in persona) {
       console.log("Edad existe en el objeto.");
   }

   if (persona.hasOwnProperty("saludar")) {
       console.log("El método saludar existe.");
   }
   ```

2. **Propiedades y Métodos Dinámicos con `Object.defineProperty`**
   - `Object.defineProperty` permite añadir propiedades con configuraciones específicas como `writable`, `enumerable`, y `configurable`:
   ```javascript
   Object.defineProperty(persona, "pais", {
       value: "España",
       writable: true,
       enumerable: true,
       configurable: true
   });
   console.log(persona.pais); // "España"
   ```

3. **Evitar Modificaciones en Objetos Inmutables**
   - Objetos creados con `Object.freeze` no pueden ser modificados, agregando seguridad en casos en los que no se desea cambios dinámicos.
   ```javascript
   const objetoInmutable = Object.freeze({ nombre: "Carlos" });
   objetoInmutable.edad = 30; // No se añadirá 'edad'
   console.log(objetoInmutable); // { nombre: "Carlos" }
   ```


   Buenas Prácticas

    Usa Notación de Punto siempre que sea posible, ya que es más legible y común en JavaScript.
    Utiliza Notación de Corchetes cuando:
        Necesites nombres de propiedades dinámicos.
        El nombre de la propiedad contenga caracteres especiales o espacios.
        Las propiedades se acceden mediante variables o parámetros de funciones.
*/