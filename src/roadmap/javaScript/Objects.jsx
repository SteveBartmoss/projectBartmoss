

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
*/