

export function MapFunctions() {
    return (
        <>
            <h1>Funciones</h1>

            <h2>Declaración y Expresión de Funciones</h2>

            <h3>Declaración de Funciones</h3>

            <p>
                Una declaración de función es cuando defines una función con la palabra clave function, seguida del nombre de la función. Las funciones declaradas están sujetas a hoisting (se "levantan" al principio de su contexto), por lo que puedes llamarlas incluso antes de la línea donde están definidas en el código.
            </p>

            <code>
                function saludar() {
                    console.log("¡Hola!");
                }
                saludar();
            </code>

            <p>
                En este ejemplo, puedes llamar a saludar() incluso antes de su definición debido al hoisting.
            </p>

            <h3>Expresión de Función</h3>

            <p>
                Una expresión de función es cuando una función se asigna a una variable. A diferencia de las declaraciones, las expresiones de función no son levantadas, lo que significa que solo puedes usarlas después de que hayan sido definidas.
            </p>

            <code>
                const saludar = function() {
                    console.log("¡Hola!");
                };

                saludar();
            </code>

            <p>
                Aquí, la función saludar es una expresión asignada a la variable saludar. No puedes usar saludar antes de esta línea, o causará un error.
            </p>

            <h2>Funciones Anónimas y Nombradas</h2>

            <p>
                Una función puede ser anónima (sin nombre) o nombrada (con un nombre). El uso depende del contexto y de si necesitas un identificador para la función.
            </p>

            <h3>Funciones Anónimas</h3>

            <p>
                Las funciones anónimas son aquellas sin un nombre, comúnmente utilizadas en expresiones de funciones o como funciones de callback (por ejemplo, en eventos o métodos de array como map, filter).
            </p>

            <code>
                const saludar = function() {
                    console.log("¡Hola!");
                };

                [1, 2, 3].forEach(function(elemento) {
                    console.log(elemento);
                });
            </code>

            <p>
                En este caso, la función dentro de forEach es anónima y se ejecuta para cada elemento del array.
            </p>

            <h3>Funciones Nombradas</h3>

            <p>
                Las funciones nombradas tienen un identificador y pueden ser útiles para depurar o reutilizar una función específica.
            </p>

            <code>
                const saludar = function saludo() {
                    console.log("¡Hola!");
                };

                saludar(); // ¡Hola!
            </code>

            <p>
                Algunos beneficios de las funciones nombradas incluyen una mejor legibilidad y la posibilidad de ver el nombre de la función en la pila de errores en caso de problemas.
            </p>

            <h3>Arrow Functions (Funciones Flecha)</h3>

            <p>
                Las arrow functions (funciones flecha) son una sintaxis más corta para definir funciones, introducida en ES6. Usan la flecha (=>) y son especialmente útiles para funciones cortas o de una sola línea.
            </p>

            <p>
                Sintaxis de Arrow Function
            </p>

            <code>
                const sumar = function(a, b) {
                    return a + b;
                };

                const sumar = (a, b) => a + b;

                console.log(sumar(5, 10));
            </code>

            <p>
                En el ejemplo, la función flecha sumar toma dos parámetros (a y b) y retorna su suma. Si solo tiene una línea, el return y las llaves { } son opcionales.
            </p>

            <h3>Casos de Uso de Arrow Functions</h3>

            <p>
                Las funciones flecha son ideales para:
                Funciones cortas y callbacks: Simplifican la sintaxis en funciones de una sola línea o en callbacks.
                Funciones donde no se necesita this: Debido a que el contexto de this es léxico (no cambia), funcionan bien en métodos donde this debería permanecer constante.
            </p>

            <p>
                Ejemplos con Arrow Functions
            </p>

            <code>
                const numeros = [1, 2, 3];
                const dobles = numeros.map(n => n * 2);

                console.log(dobles); // [2, 4, 6]
            </code>

            <h2>Contexto this</h2>

            <p>
                El contexto this representa el objeto al cual pertenece el código actual. En funciones regulares y en arrow functions, this puede comportarse de manera diferente.
            </p>

            <h3>this en Funciones Regulares</h3>

            <p>
                En funciones normales, this depende de cómo se llama la función. Si se llama dentro de un objeto, this apunta a ese objeto. Si se llama en un contexto global, this será undefined en modo estricto o el objeto window en modo no estricto.
            </p>

            <code>
                const persona = {
                    nombre: "Ana",
                saludar: function() {
                    console.log(`Hola, soy ${this.nombre}`);
                    }           
                };

                persona.saludar(); // Hola, soy Ana

            </code>

            <p>
                Aquí this.nombre se refiere a nombre dentro de persona.
            </p>

            <h3>this en Arrow Functions</h3>

            <p>
                Las arrow functions no tienen su propio this; en lugar de eso, this se hereda del contexto donde se define. Esto se llama this léxico.
            </p>

            <code>
                const persona = {
                    nombre: "Ana",
                saludar: function() {
                        const presentacion = () => {
                    console.log(`Hola, soy ${this.nombre}`);
                        };
                presentacion();
                    }
                };

                persona.saludar();
            </code>

            <p>
                En este caso, this.nombre en presentacion() se refiere al this de saludar, que es el objeto persona. Esto hace que las arrow functions sean útiles en funciones anidadas donde quieres mantener el contexto this.
            </p>

            <p>Ejemplo Comparativo</p>

            <code>
                const persona = {
                    nombre: "Ana",
                saludar: function() {
                    setTimeout(function () {
                        console.log(`Hola, soy ${this.nombre}`);
                    }, 1000);
                    }
                };

                persona.saludar(); // "Hola, soy undefined" (porque `this` apunta a `window`)

                const personaArrow = {
                    nombre: "Ana",
                saludar: function() {
                    setTimeout(() => {
                        console.log(`Hola, soy ${this.nombre}`);
                    }, 1000);
                    }
                };

                personaArrow.saludar(); // "Hola, soy Ana" (porque `this` se hereda de `personaArrow`)
            </code>

            <p>
                En el primer ejemplo, setTimeout usa una función regular, y this pierde el contexto de persona. En el segundo ejemplo, setTimeout usa una arrow function, que mantiene el contexto this de personaArrow.
            </p>

            <h2>Paso por Valor</h2>

            <p>
                El paso por valor significa que cuando pasas una copia de un valor a una variable o a una función, cualquier cambio que hagas en esa copia no afectará al valor original. Esto aplica a los tipos de datos primitivos en JavaScript, que incluyen:
                Números (Number)
                Cadenas de texto (String)
                Booleanos (Boolean)
                undefined
                null
                Símbolos (Symbol)
                BigInt (BigInt)
            </p>

            <p>
                Ejemplo de Paso por Valor
            </p>

            <code>
                let a = 5;
                let b = a; // `b` recibe una copia de `a`
                b = 10;

                console.log(a); // 5 (no cambia)
                console.log(b); // 10
            </code>

            <p>
                En este ejemplo, cuando b toma el valor de a, en realidad está tomando una copia del valor, así que al cambiar b, a permanece igual.
            </p>

            <h2>Paso por Referencia</h2>

            <p>
                El paso por referencia significa que en lugar de copiar el valor, se pasa una referencia al mismo valor en memoria. Esto aplica a los tipos de datos compuestos (objetos y arrays en JavaScript), por lo que cualquier cambio en la referencia afectará a todos los lugares que usen esa referencia.
            </p>

            <p>
                Ejemplo de Paso por Referencia
            </p>

            <code>
                let persona = {nombre: "Ana" };
                let otraPersona = persona; // `otraPersona` apunta a la misma referencia de `persona`

                otraPersona.nombre = "Carlos";

                console.log(persona.nombre); // "Carlos" (se modifica también en `persona`)
                console.log(otraPersona.nombre); // "Carlos"
            </code>

            <p>
                En este caso, al modificar otraPersona.nombre, también estamos cambiando persona.nombre porque ambas variables apuntan al mismo objeto en la memoria.
            </p>

            <h3>Paso por Referencia en Funciones</h3>

            <p>
                Cuando pasas un objeto o array a una función, también se pasa por referencia. Por lo tanto, cualquier cambio que realices dentro de la función afectará al objeto o array original.
            </p>

            <code>
                function modificarPersona(p) {
                    p.nombre = "Lucía";
                }

                let persona = {nombre: "Ana" };
                modificarPersona(persona);

                console.log(persona.nombre); // "Lucía" (modificado por la función)
            </code>

            <h2>Inmutabilidad</h2>

            <p>
                La inmutabilidad es el concepto de que una vez que un valor es creado, no puede ser cambiado. Esto es especialmente útil para trabajar con objetos y arrays en JavaScript, ya que, por defecto, estos tipos de datos se comportan de forma mutable.
            </p>

            <h3>Técnicas para la Inmutabilidad</h3>

            <p>
                Object.freeze(): Este método congela un objeto, lo que significa que no podrás agregar, eliminar ni modificar sus propiedades. Sin embargo, es superficial, por lo que no congela objetos anidados.
            </p>

            <code>
                const persona = {nombre: "Ana", edad: 25 };
                Object.freeze(persona);

                persona.nombre = "Carlos"; // No hace nada, el objeto es inmutable
                console.log(persona.nombre); // "Ana"
            </code>

            <h3>Copias para Arrays y Objetos</h3>

            <p>
                Para evitar modificar un array u objeto original, puedes crear copias antes de hacer cambios. Esto es útil para simular la inmutabilidad sin bloquear el objeto.
            </p>

            <p>
                Copias de Objetos con Object.assign o el operador spread {...obj}:
            </p>

            <code>
                const persona = {nombre: "Ana", edad: 25 };
                const copiaPersona = {...persona, edad: 30 }; // copia modificada

                console.log(persona.edad); // 25 (original)
                console.log(copiaPersona.edad); // 30 (copia con cambio)
            </code>

            <p>
                Copias de Arrays con slice o spread [ ...arr ]:
            </p>

            <code>
                const numeros = [1, 2, 3];
                const copiaNumeros = [...numeros, 4]; // agrega `4` a la copia

                console.log(numeros); // [1, 2, 3] (original)
                console.log(copiaNumeros); // [1, 2, 3, 4] (copia con cambio)
            </code>


            <h3>Inmutabilidad Profunda</h3>

            <p>
                Para hacer inmutables los objetos con propiedades anidadas, puedes usar métodos recursivos o bibliotecas como Immutable.js. Una alternativa sencilla es recrear todo el objeto en lugar de solo modificar propiedades específicas.
            </p>

            <code>
                const persona = {
                    nombre: "Ana",
                direccion: {
                    ciudad: "Lima",
                pais: "Perú"
                    }
                };

                const personaModificada = {
                    ...persona,
                    direccion: {...persona.direccion, ciudad: "Cusco" }
                };

                console.log(persona.direccion.ciudad); // "Lima" (original)
                console.log(personaModificada.direccion.ciudad); // "Cusco" (copia con cambio)
            </code>

            <h2>Object.keys: Claves de un Objeto en un Array</h2>

            <p>
                Función: Object.keys(obj) devuelve un array con todas las claves propias de un objeto.
                Uso común: Enumerar o verificar las propiedades de un objeto.
                Limitación: No devuelve propiedades heredadas de prototipos, solo las propiedades propias del objeto.
            </p>

            <p>Ejemplo</p>

            <code>
                const persona = {nombre: "Ana", edad: 25 };
                const claves = Object.keys(persona);

                console.log(claves); // ["nombre", "edad"]
            </code>

            <h2>Object.values: Valores de un Objeto en un Array</h2>

            <p>
                Función: Object.values(obj) devuelve un array con todos los valores de las propiedades propias del objeto.
                Uso común: Acceder y procesar únicamente los valores de un objeto sin tener en cuenta sus claves.
            </p>

            <p>Ejemplo</p>

            <code>
                const persona = {nombre: "Ana", edad: 25 };
                const valores = Object.values(persona);

                console.log(valores); // ["Ana", 25]
            </code>

            <h2>Object.entries: Pares [clave, valor] de un Objeto en un Array</h2>

            <p>
                Función: Object.entries(obj) devuelve un array de arrays, donde cada subarray contiene un par [clave, valor].
                Uso común: Ideal para trabajar con ambas partes de cada propiedad de un objeto simultáneamente.
            </p>

            <p>Ejemplo</p>

            <code>
                const persona = {nombre: "Ana", edad: 25 };
                const pares = Object.entries(persona);

                console.log(pares); // [["nombre", "Ana"], ["edad", 25]]
            </code>

            <h2>Enumeración vs. Propiedades Propias: hasOwnProperty y Técnicas para Evitar Propiedades de Prototipos</h2>

            <p>
                Cuando se trabaja con objetos, puede ser necesario distinguir entre las propiedades que pertenecen al objeto directamente (propiedades propias) y las heredadas del prototipo. Esto es crucial, especialmente al iterar sobre las propiedades de un objeto, para evitar procesar propiedades que no forman parte del objeto en sí.
            </p>

            <h3>Propiedades Propias</h3>

            <p>
                Son las propiedades directamente definidas en el objeto.
                No incluyen propiedades heredadas del prototipo del objeto.
            </p>

            <h3>Propiedades del Prototipo</h3>

            <p>
                Son las propiedades y métodos que se heredan de la cadena de prototipos.
                Ejemplo: toString() y valueOf() son métodos heredados del prototipo de Object.
            </p>

            <h3>hasOwnProperty</h3>

            <p>
                Función: obj.hasOwnProperty(propiedad) devuelve true si la propiedad especificada es propia del objeto y false si es heredada.
                Uso común: Filtrar propiedades propias en un bucle for...in para evitar las propiedades heredadas.
            </p>

            <p>Ejemplo de hasOwnProperty</p>

            <code>
                const persona = {nombre: "Ana", edad: 25 };

                for (let clave in persona) {
                    if (persona.hasOwnProperty(clave)) {
                        console.log(`${clave}: ${persona[clave]}`);
                    }
                }
            </code>

            <h2>Técnicas para Evitar Propiedades del Prototipo</h2>

            <p>
                Usar Object.keys: Solo devuelve propiedades propias del objeto, sin incluir las heredadas del prototipo.
            </p>

            <code>
                Object.keys(persona).forEach((clave) => {
                    console.log(`${clave}: ${persona[clave]}`);
                });
            </code>

            <p>
                Combinar Object.entries con hasOwnProperty: Aunque Object.entries solo devuelve propiedades propias, es una técnica útil si necesitas verificaciones adicionales en objetos complejos.
            </p>

            <code>
                Object.entries(persona).forEach(([clave, valor]) => {
                    if (persona.hasOwnProperty(clave)) {
                        console.log(`${clave}: ${valor}`);
                    }
                });
            </code>

            <p>
                Usar for...in solo con hasOwnProperty: Si usas for...in sin hasOwnProperty, se incluirán las propiedades heredadas.
            </p>

            <code>
                for (let clave in persona) {
                    if (persona.hasOwnProperty(clave)) {
                        console.log(`${clave}: ${persona[clave]}`);
                    }
                }
            </code>
            
        </>
    )
}