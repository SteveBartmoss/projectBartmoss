

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
        </>
    )
}