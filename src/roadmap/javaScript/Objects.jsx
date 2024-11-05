

export function MapObjects() {
    return (
        <>
            <h1>Propiedades dinámicas</h1>

            <p>
                En JavaScript, los objetos son dinámicos, lo que permite añadir, modificar o eliminar propiedades y métodos en cualquier momento después de la creación del objeto.
            </p>

            <h2>Añadir propiedades dinámicamente</h2>

            <p>
                En JavaScript, puedes agregar propiedades a un objeto en cualquier momento, incluso después de haberlo creado.
            </p>

            <h2>Ejemplo</h2>

            <code>
                const persona = {nombre: "Juan" };
                persona.edad = 30; // Añadiendo la propiedad 'edad' en tiempo de ejecución
                console.log(persona); // {nombre: "Juan", edad: 30 }
            </code>

            <p>
                También se puede añadir una propiedad usando corchetes [], lo cual es útil cuando el nombre de la propiedad está almacenado en una variable:
            </p>

            <code>
                const key = "ocupacion";
                persona[key] = "Desarrollador";
            </code>

            <h2>Modificar propiedades dinámicamente</h2>

            <p>
                Modificar una propiedad es tan sencillo como reasignarle un valor:
            </p>

            <code>
                persona.edad = 31; // Cambia el valor de la propiedad 'edad'
                console.log(persona); // {nombre: "Juan", edad: 31, ocupacion: "Desarrollador" }
            </code>

            <h2>Eliminar propiedades dinámicamente</h2>

            <p>
                Para eliminar una propiedad, utiliza el operador delete:
            </p>

            <code>
                delete persona.edad; // Elimina la propiedad 'edad'
                console.log(persona); // {nombre: "Juan", ocupacion: "Desarrollador" }
            </code>

            <h1>Métodos Dinámicos en JavaScript</h1>

            <p>
                Un método en JavaScript es simplemente una propiedad de un objeto que contiene una función. Puedes agregar, modificar y eliminar métodos en tiempo de ejecución de la misma forma que con las propiedades.
            </p>

            <h2>Añadir Métodos Dinámicamente</h2>

            <p>
                Puedes añadir un método asignando una función a una propiedad del objeto.
            </p>

            <code>
                persona.saludar = function() {
                    console.log(`Hola, soy ${this.nombre}`);
                };
                persona.saludar(); // "Hola, soy Ana"
            </code>

            <p>
                También se puede añadir un metodo usando corchetes [], esto es útil cuando el nombre del método está almacenado en una variable.
            </p>

            <code>
                const metodo = "despedirse";
                persona[metodo] = function() {
                    console.log("Adiós!");
                };
                persona.despedirse(); // "Adiós!"
            </code>

            <h2>Modificar Métodos Dinámicamente</h2>

            <p>Puedes modificar un método reasignándolo a una nueva función.</p>

            <code>
                persona.saludar = function() {
                    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
                };
                persona.saludar(); // "Hola, mi nombre es Ana y tengo 26 años"
            </code>

            <h2>Eliminar Métodos Dinámicamente</h2>

            <p>delete también elimina métodos del objeto.</p>

            <code>
                delete persona.saludar; // Elimina el método 'saludar'
                console.log(persona.saludar); // undefined
            </code>

            <h1>Acceso a Propiedades en JavaScript</h1>

            <p>
                JavaScript permite acceder a las propiedades de un objeto utilizando dos tipos de notación: notación de punto y notación de corchetes. Ambas formas permiten leer, añadir, modificar o eliminar propiedades, pero tienen diferentes usos y limitaciones.
            </p>

            <h2>Notación de Punto (.)</h2>

            <p>
                Es la forma más común y directa de acceder a las propiedades de un objeto.
                Se utiliza cuando el nombre de la propiedad es un identificador válido de JavaScript (no contiene espacios, guiones, ni empieza con un número).
            </p>

            <code>
                const persona = {nombre: "Luis", edad: 30 };
                console.log(persona.nombre); // "Luis"
                console.log(persona.edad); // 30
            </code>

            <p>
                No se puede usar la notación de punto si el nombre de la propiedad:
                Contiene caracteres especiales (por ejemplo, persona["nombre completo"] no funciona con persona.nombre completo).
                Es un número o comienza con un número (persona.123 no es válido).
            </p>

            <code>
                const objeto = {"nombre completo": "Luis Pérez" };
                console.log(objeto.nombre completo);
            </code>

            <h2>Notación de Corchetes ([])</h2>

            <p>
                La notación de corchetes es útil cuando el nombre de la propiedad es dinámico, se almacena en una variable, o no es un identificador válido.
            </p>

            <code>
                const persona = {nombre: "Luis", edad: 30 };
                const propiedad = "nombre";
                console.log(persona[propiedad]); // "Luis"
            </code>

            <p>
                La notación de corchetes permite acceder a propiedades que contienen espacios, caracteres especiales o números.
            </p>

            <code>
                const producto = {"precio-venta": 200, "nombre producto": "Laptop" };
                console.log(producto["precio-venta"]); // 200
                console.log(producto["nombre producto"]); // "Laptop"
            </code>

            <p>
                La notación de corchetes permite acceder a propiedades a través de una variable. Este enfoque es útil para acceder a propiedades basadas en condiciones o entradas de usuario.
            </p>

            <code>
                const propiedad = "edad";
                console.log(persona[propiedad]); // 30
            </code>

            <h1>Enumeración de Propiedades en JavaScript</h1>

            <p>
                La enumeración de propiedades en un objeto es una técnica importante en JavaScript, especialmente para trabajar con estructuras de datos dinámicas o desconocidas. Los métodos disponibles (for...in, Object.keys, Object.values, y Object.entries) permiten acceder y recorrer las propiedades y valores de un objeto de maneras diferentes, cada uno con sus ventajas.
            </p>

            <h2>for...in</h2>

            <p>
                El bucle for...in itera sobre todas las propiedades enumerables de un objeto, incluidas tanto las propiedades propias como las heredadas del prototipo.
                Este bucle es útil para obtener el nombre de cada propiedad, pero es recomendable combinarlo con hasOwnProperty() para asegurarse de que la propiedad pertenece directamente al objeto y no a su prototipo.
            </p>

            <code>
                const persona = {nombre: "Luis", edad: 30, ocupacion: "Ingeniero" };
                for (const propiedad in persona) {
                    if (persona.hasOwnProperty(propiedad)) {
                    console.log(`${propiedad}: ${persona[propiedad]}`);
                    }
                }
            </code>

            <p>
                Este bucle es útil cuando necesitas iterar tanto sobre las propiedades propias como heredadas de un objeto.
                Es especialmente relevante en objetos donde el prototipo juega un papel importante.
            </p>

            <h2>Object.keys()</h2>

            <p>
                Object.keys() devuelve un array con los nombres (claves) de las propiedades propias y enumerables de un objeto, excluyendo las heredadas.
                El método es ideal cuando solo necesitas las claves sin preocuparte por las propiedades del prototipo.
            </p>

            <code>
                const producto = {nombre: "Laptop", precio: 1500, disponible: true };
                const propiedades = Object.keys(producto);
                console.log(propiedades); // ["nombre", "precio", "disponible"]
            </code>

            <p>
                Iteración Usando forEach
            </p>

            <code>
                propiedades.forEach(propiedad => {
                    console.log(`${propiedad}: ${producto[propiedad]}`);
                });
            </code>

            <p>
                Es útil para obtener una lista de todas las claves del objeto, especialmente si no necesitas iterar sobre propiedades heredadas.
                Object.keys() es más seguro y específico que for...in para evitar propiedades del prototipo.
            </p>

            <h2>Object.values()</h2>

            <p>
                Object.values() devuelve un array con los valores de las propiedades propias y enumerables del objeto.
                Es ideal cuando necesitas trabajar solo con los valores sin preocuparte por las claves.
            </p>

            <code>
                const usuario = {nombre: "Ana", edad: 25, pais: "México" };
                const valores = Object.values(usuario);
                console.log(valores); // ["Ana", 25, "México"]
            </code>

            <p>
                Iteración Usando forEach
            </p>

            <code>
                valores.forEach(valor => {
                    console.log(valor);
                });
            </code>

            <p>
                Ideal para casos en los que solo necesitas los valores de las propiedades, como cuando quieres sumar valores o realizar operaciones estadísticas.
            </p>

            <h2>Object.entries()</h2>

            <p>
                Object.entries() devuelve un array de arrays, donde cada sub-array contiene un par [clave, valor].
                Es útil para obtener tanto la clave como el valor en una estructura de datos que facilita la iteración.
            </p>

            <code>
                const empleado = {nombre: "Carlos", rol: "Desarrollador", edad: 28 };
                const entradas = Object.entries(empleado);
                console.log(entradas);
            </code>

            <p>
                Recorriendo con forEach
            </p>

            <code>
                entradas.forEach(([clave, valor]) => {
                    console.log(`${clave}: ${valor}`);
                });
            </code>

            <p>
                Es una excelente opción cuando necesitas tanto las claves como los valores en una estructura fácil de manejar.
                Útil en operaciones de mapeo y transformación de objetos.
            </p>

            <h1>Mutabilidad en Objetos en JavaScript</h1>

            <p>
                En JavaScript, los objetos son mutables por naturaleza, lo cual significa que una vez que se crea un objeto, su contenido puede modificarse a lo largo del tiempo. Esto se relaciona con cómo JavaScript maneja el paso por referencia para objetos, lo que implica que diferentes variables pueden referirse al mismo objeto en memoria. Estos conceptos son cruciales para entender cómo los datos cambian y se comparten en aplicaciones JavaScript.
            </p>

            <h2>¿Qué Significa que un Objeto sea Mutable?</h2>

            <p>
                Mutabilidad implica que puedes modificar las propiedades de un objeto después de haberlo creado.
                Las variables que contienen objetos almacenan una referencia a la ubicación en la memoria donde se guarda el objeto, no el objeto en sí.
                Debido a esto, los cambios realizados en el objeto a través de una variable son reflejados en todas las variables que apuntan a ese mismo objeto.
            </p>

            <code>
                const persona = {nombre: "Ana", edad: 30 };
                persona.edad = 31; // Modificamos una propiedad existente
                persona.pais = "México"; // Añadimos una nueva propiedad
                console.log(persona); // {nombre: "Ana", edad: 31, pais: "México" }
            </code>

            <h2>Paso por Referencia vs. Paso por Valor</h2>

            <p>
                En JavaScript, los tipos primitivos (números, cadenas, booleanos, null y undefined) son inmutables y se pasan por valor.
                Los objetos y arrays son mutables y se pasan por referencia.
                Cuando pasas un objeto a una función o lo asignas a otra variable, ambas referencias apuntan al mismo lugar en memoria. Esto significa que cualquier cambio en una referencia afecta al objeto compartido.
            </p>

            <p>
                Referencias en Objetos
            </p>

            <code>
                const objeto1 = {nombre: "Carlos" };
                const objeto2 = objeto1; // Ambos apuntan al mismo objeto

                objeto2.nombre = "Luis";
                console.log(objeto1.nombre); // "Luis" (ambas variables reflejan el cambio)
            </code>

            <p>
                Paso por Referencia en Funciones
            </p>

            <code>
                function actualizarEdad(persona) {
                    persona.edad = 35;
                }

                const persona = {nombre: "Lucía", edad: 28 };
                actualizarEdad(persona);
                console.log(persona.edad); // 35 (la función modifica el objeto original)
            </code>

            <h2>Cómo Evitar Efectos Colaterales: Copias de Objetos</h2>

            <p>
                Para evitar modificar el objeto original (mutación) cuando trabajas con referencias, puedes crear una copia del objeto. Existen diferentes formas de hacerlo en JavaScript:
                Asignación mediante {...objeto} (Spread Operator): Crea una copia superficial del objeto.
                Object.assign(): También crea una copia superficial del objeto.
                Clonación profunda: Cuando el objeto contiene otros objetos anidados, la copia superficial no es suficiente. Para clonar profundamente, puedes utilizar métodos como structuredClone() o bibliotecas como lodash.
            </p>

            <p>
                Copia Superficial
            </p>

            <code>
                const original = {nombre: "Juan", edad: 40 };
                const copia = {...original};

                copia.edad = 45;
                console.log(original.edad); // 40 (el original no se modifica)
                console.log(copia.edad);    // 45 (la copia es independiente)
            </code>

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

            <code>
                const persona = {
                    nombre: "Ana",
                direccion: {ciudad: "Lima", pais: "Perú" }
                };

                const copiaSuperficial = {...persona};
                copiaSuperficial.direccion.ciudad = "Cusco";

                console.log(persona.direccion.ciudad); // "Cusco" (la ciudad cambia en ambas referencias)
            </code>

            <p>
                Clonación Profunda con structuredClone()
            </p>

            <code>
                const persona = {
                    nombre: "Ana",
                    direccion: {ciudad: "Lima", pais: "Perú" }
                };

                const copiaProfunda = structuredClone(persona);
                copiaProfunda.direccion.ciudad = "Cusco";

                console.log(persona.direccion.ciudad); // "Lima" (el original no se ve afectado)

            </code>

        </>
    )
}

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