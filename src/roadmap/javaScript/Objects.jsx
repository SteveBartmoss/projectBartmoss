

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

        </>
    )
}