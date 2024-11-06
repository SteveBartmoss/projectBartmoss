

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

        </>
    )
}